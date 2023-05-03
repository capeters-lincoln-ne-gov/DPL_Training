namespace TodoApi.Models
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public bool IsComplete { get; set; }
        public string? DueDate { get; set; }
        public string? Location { get; set; }
        public string? Duration { get; set; }
        public string? Secret { get; set; }
    }
}