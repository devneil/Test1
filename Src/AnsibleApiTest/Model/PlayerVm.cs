namespace AnsibleApiTest.Model
{
    public class PlayerVm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }

        public PlayerVm(int id, string name, string position)
        {
            Id = id;
            Name = name;
            Position = position;
        }
    }
}