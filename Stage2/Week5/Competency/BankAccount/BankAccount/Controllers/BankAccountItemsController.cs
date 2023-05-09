using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankAccount.Models;

namespace BankAccount.Controllers
{
    [Route("api/BankAccountItems")]
    [ApiController]
    public class BankAccountItemsController : ControllerBase
    {
        private readonly BankAccountContext _context;

        public BankAccountItemsController(BankAccountContext context)
        {
            _context = context;
        }

        // GET: api/BankAccountItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BankAccountItem>>> GetBankAccountItems()
        {
          if (_context.BankAccountItems == null)
          {
              return NotFound();
          }
            return await _context.BankAccountItems.ToListAsync();
        }

        // GET: api/BankAccountItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BankAccountItem>> GetBankAccountItem(long id)
        {
          if (_context.BankAccountItems == null)
          {
              return NotFound();
          }
            var bankAccountItem = await _context.BankAccountItems.FindAsync(id);

            if (bankAccountItem == null)
            {
                return NotFound();
            }

            return bankAccountItem;
        }

        // PUT: api/BankAccountItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBankAccountItem(long id, BankAccountItem bankAccountItem)
        {
            if (id != bankAccountItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(bankAccountItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BankAccountItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BankAccountItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BankAccountItem>> PostBankAccountItem(BankAccountItem bankAccountItem)
        {
          if (_context.BankAccountItems == null)
          {
              return Problem("Entity set 'BankAccountContext.BankAccountItems'  is null.");
          }
            _context.BankAccountItems.Add(bankAccountItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBankAccountItem), new { id = bankAccountItem.Id }, bankAccountItem);
        }

        // DELETE: api/BankAccountItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBankAccountItem(long id)
        {
            if (_context.BankAccountItems == null)
            {
                return NotFound();
            }
            var bankAccountItem = await _context.BankAccountItems.FindAsync(id);
            if (bankAccountItem == null)
            {
                return NotFound();
            }

            _context.BankAccountItems.Remove(bankAccountItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BankAccountItemExists(long id)
        {
            return (_context.BankAccountItems?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
