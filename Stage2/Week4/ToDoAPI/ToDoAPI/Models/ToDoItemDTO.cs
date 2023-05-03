namespace TodoApi.Models
{
    public class TodoItemDTO
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? DueDate { get; set; }
        public string? Location { get; set; }
        public bool IsComplete { get; set; }
        public string? Duration { get; set; }
    }
}