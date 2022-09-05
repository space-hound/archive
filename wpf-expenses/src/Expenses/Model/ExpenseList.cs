using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Expenses.Model
{
    public class ExpenseList : INotifyPropertyChanged
    {

        public event PropertyChangedEventHandler PropertyChanged;

        private void OnPropertyRaised(string propertyname)
        {
            if (PropertyChanged != null)
            {
                PropertyChanged(this, new PropertyChangedEventArgs(propertyname));
            }
        }
            
        #region properties
        private ObservableCollection<ExpenseItem> exp;
        public ObservableCollection<ExpenseItem> Exp
        {
            get
            {
                return this.exp;
            }
            set
            {
                this.exp = value;
            }
        }
        public int ExpCount
        {
            get
            {
                return this.exp.Count;
            }
        }

        private ObservableCollection<ExpenseItem> inc;
        public ObservableCollection<ExpenseItem> Inc
        {
            get
            {
                return this.inc;
            }
            set
            {
                this.inc = value;
            }
        }
        public int IncCount
        {
            get
            {
                return this.inc.Count;
            }
        }

        private double computeExp()
        {
            double sum = 0;
            foreach(ExpenseItem e in exp)
            {
                sum += e.Val;
            }

            return sum;
        }
        public double ExpSum
        {
            get
            {
                return this.computeExp();
            }
        }

        private double computeInc()
        {
            double sum = 0;
            foreach (ExpenseItem i in inc)
            {
                sum += i.Val;
            }

            return sum;
        }
        public double IncSum
        {
            get
            {
                return this.computeInc();
            }
        }

        private double computeBoth()
        {
            return this.computeInc() - this.computeExp();
        }
        public double FinalSum
        {
            get
            {
                return this.computeBoth();
            }
        }
        #endregion

        #region constructor/s
        public ExpenseList()
        {
            this.exp = new ObservableCollection<ExpenseItem>();
            this.inc = new ObservableCollection<ExpenseItem>();
        }
        public ExpenseList(ObservableCollection<ExpenseItem> _exp, ObservableCollection<ExpenseItem> _inc)
        {
            this.exp = _exp;
            this.inc = _inc;
        }
        #endregion

        #region methods
        public bool IsLoss()
        {
            return this.computeBoth() < 0;
        }
        public bool IsWin()
        {
            return this.computeBoth() > 0;
        }
        public bool IsZero()
        {
            return this.computeBoth() == 0;
        }

        public string State()
        {
            if (this.IsLoss())
                return "Losing Money";
            if (this.IsWin())
                return "Making Money";
            if (this.IsZero())
                return "Zero Money";

            return "Something has gone wrong";
        }
        public int StateCode()
        {
            if (this.IsLoss())
                return -1;
            if (this.IsWin())
                return 1;
            if (this.IsZero())
                return 0;

            return 666;
        }

        public void AddItem(ExpenseItem item)
        {
            if (item.IsExp())
                this.exp.Add(item);
            else
                this.inc.Add(item);

            this.OnPropertyRaised("updated");
        }
        public void RemoveItem(ExpenseItem item)
        {
            if (item.IsExp())
                this.exp.Remove(item);
            else
                this.inc.Remove(item);

            this.OnPropertyRaised("updated");
        }

        public void RemoveExpAt(int index)
        {
            this.exp.RemoveAt(index);
            this.OnPropertyRaised("updated");
        }
        public void RemoveIncAt(int index)
        {
            this.inc.RemoveAt(index);
            this.OnPropertyRaised("updated");
        }

        public void Switch(ExpenseItem item)
        {
            if (item.IsExp())
            {
                if (!this.exp.Contains(item))
                    return;

                this.exp.Remove(item);
                item.SwitchType();
                this.inc.Add(item);
            }
            else
            {
                if (!this.inc.Contains(item))
                    return;

                this.inc.Remove(item);
                item.SwitchType();
                this.exp.Add(item);
            }

            this.OnPropertyRaised("updated");
        }

        public void SwitchExp(int index)
        {
            ExpenseItem item = new ExpenseItem(
                this.exp[index].Title,
                this.exp[index].Desc,
                this.exp[index].Val,
                "inc"
                );
            this.exp.RemoveAt(index);
            this.inc.Add(item);

            this.OnPropertyRaised("updated");
        }
        public void SwitchInc(int index)
        {
            ExpenseItem item = new ExpenseItem(
                this.inc[index].Title,
                this.inc[index].Desc,
                this.inc[index].Val,
                "exp"
                );
            this.inc.RemoveAt(index);
            this.exp.Add(item);

            this.OnPropertyRaised("updated");
        }

        public void ModExpAt(ExpenseItem item, int index)
        {
            if (!item.IsExp())
                throw new Exception("Wrong type mate! Exp - expected");
            this.exp[index] = item;

            this.OnPropertyRaised("updated");
        }
        public void ModIncAt(ExpenseItem item, int index)
        {
            if (!item.IsInc())
                throw new Exception("Wrong type mate! Inc - expected");

            this.inc[index] = new ExpenseItem(
                item.Title,
                item.Desc,
                item.Val,
                item.Type);

            this.OnPropertyRaised("updated");
        }
        #endregion
    }
}
