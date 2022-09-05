using Expenses.Model;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Expenses.Engine
{
    public class Intermediate
    {
        public ObservableCollection<ExpenseItem> inc;
        public ObservableCollection<ExpenseItem> exp;

        public Intermediate()
        {
            this.inc = new ObservableCollection<ExpenseItem>();
            this.exp = new ObservableCollection<ExpenseItem>();
        }
        public Intermediate(ExpenseList l)
        {
            this.inc = l.Inc;
            this.exp = l.Exp;
        }
    }
}
