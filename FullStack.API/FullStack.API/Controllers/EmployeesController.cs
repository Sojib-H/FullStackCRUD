using FullStack.API.Data;
using FullStack.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;

        public EmployeesController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var Employees = await _fullStackDbContext.Employees.ToListAsync();
            return Ok(Employees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployees(Employee employeeRequest)
        {
            employeeRequest.Id= Guid.NewGuid();
            await _fullStackDbContext.Employees.AddAsync(employeeRequest);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(employeeRequest);
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> getEmployeeById([FromRoute] Guid id)
        {
            var employee = await _fullStackDbContext.Employees.FindAsync(id);
            if(employee != null)
            {
                return Ok(employee);
            }
            return NotFound();
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, UpdateEmployee updateEmployee)
        {
            var employee = await _fullStackDbContext.Employees.FindAsync(id);
            if(employee != null)
            {
                employee.Name = updateEmployee.Name;
                employee.Email = updateEmployee.Email;
                employee.Salary = updateEmployee.Salary;
                employee.Phone = updateEmployee.Phone;
                employee.Department = updateEmployee.Department;
                await _fullStackDbContext.SaveChangesAsync();
                return Ok(employee);
            }
            return NotFound();
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> deleteEmployee([FromRoute] Guid id)
        {
            var employee = await _fullStackDbContext.Employees.FindAsync(id);
            if (employee != null)
            {
                _fullStackDbContext.Employees.Remove(employee);
                await _fullStackDbContext.SaveChangesAsync();
                return Ok(employee);
            }
            return NotFound();
        }

    }
}
