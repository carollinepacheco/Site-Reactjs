using System.ComponentModel.DataAnnotations.Schema;

namespace BackEndDorea.Model
{
    [Table(name: "doacao")]
    public class Doacao
    {
        [Column("doacao_id")]
        public int Id { get; set; }

        [Column("doacao_valor")]
        public string? Valor { get; set; }
    }
}
