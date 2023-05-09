using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamRosterApi.Models;

namespace TeamRoster.Controllers
{
    //[Route("api/[controller]")]
    [Route("api/TeamRosterItems")]
    [ApiController]
    public class TeamRosterItemsController : ControllerBase
    {
        private readonly TeamRosterContext _context;

        public TeamRosterItemsController(TeamRosterContext context)
        {
            _context = context;
        }

        // GET: api/TeamRosterItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeamRosterItem>>> GetTeamRosterItems()
        {
          if (_context.TeamRosterItems == null)
          {
              return NotFound();
          }
            return await _context.TeamRosterItems.ToListAsync();
        }

        // GET: api/TeamRosterItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TeamRosterItem>> GetTeamRosterItem(long id)
        {
          if (_context.TeamRosterItems == null)
          {
              return NotFound();
          }
            var teamRosterItem = await _context.TeamRosterItems.FindAsync(id);

            if (teamRosterItem == null)
            {
                return NotFound();
            }

            return teamRosterItem;
        }

        // PUT: api/TeamRosterItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeamRosterItem(long id, TeamRosterItem teamRosterItem)
        {
            if (id != teamRosterItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(teamRosterItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamRosterItemExists(id))
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

        // POST: api/TeamRosterItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TeamRosterItem>> PostTeamRosterItem(TeamRosterItem teamRosterItem)
        {
          if (_context.TeamRosterItems == null)
          {
              return Problem("Entity set 'TeamRosterContext.TeamRosterItems'  is null.");
          }
            _context.TeamRosterItems.Add(teamRosterItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTeamRosterItem), new { id = teamRosterItem.Id }, teamRosterItem);
        }

        // DELETE: api/TeamRosterItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeamRosterItem(long id)
        {
            if (_context.TeamRosterItems == null)
            {
                return NotFound();
            }
            var teamRosterItem = await _context.TeamRosterItems.FindAsync(id);
            if (teamRosterItem == null)
            {
                return NotFound();
            }

            _context.TeamRosterItems.Remove(teamRosterItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TeamRosterItemExists(long id)
        {
            return (_context.TeamRosterItems?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
