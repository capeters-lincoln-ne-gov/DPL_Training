//namespace BankAccount.Models
//{
//    public class BankAccountItem
//    {
//    }
//}
namespace BankAccount.Models
{
    public class BankAccountItem
    {
        public long Id { get; set; }
        public int? CheckNum { get; set; }
        public string? TranDate { get; set; }
        public string? Description { get; set; }
        public decimal Amount { get; set; }
        public string? TranType { get; set; }
    }
}