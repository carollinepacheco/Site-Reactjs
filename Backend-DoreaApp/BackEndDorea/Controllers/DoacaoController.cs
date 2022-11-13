using BackEndDorea.Data;
using BackEndDorea.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEndDorea.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoacaoController : Controller
    {
        private readonly _DbContext Db;

        public DoacaoController(_DbContext _Db)
        {
            Db = _Db;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doacao>>> GetDoacoes()
        {
            return await Db.Doacaos.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult> PostDoacao(Doacao doacao)
        {
            await Db.Doacaos.AddAsync(doacao);
            await Db.SaveChangesAsync();
            return CreatedAtAction("GetDoacao", new { id = doacao.Id }, doacao);
        }
    }
}
