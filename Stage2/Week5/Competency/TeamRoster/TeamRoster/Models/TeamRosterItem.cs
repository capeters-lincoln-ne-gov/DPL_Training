namespace TeamRosterApi.Models
{
    public class TeamRosterItem
    {
        public long Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public decimal Height { get; set; }
        public decimal Weight { get; set; }
        public string? EligYear { get; set; }
        public string? Position { get; set; }
        public string? SSN { get; set; }
    }
}