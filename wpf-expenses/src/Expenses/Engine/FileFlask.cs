using Expenses.Model;
using Newtonsoft.Json;
using System.Collections.ObjectModel;

namespace Expenses.Engine
{
    public static class FileFlask
    {
        public static ExpenseList Load(string name)
        {
            string json = System.IO.File.ReadAllText(name);
            Intermediate inter = JsonConvert.DeserializeObject<Intermediate>(json);
            ObservableCollection<ExpenseItem> inc = new ObservableCollection<ExpenseItem>();
            ObservableCollection<ExpenseItem> exp = new ObservableCollection<ExpenseItem>();

            foreach(var e in inter.inc)
            {
                double dl = e.Val;
                inc.Add(new ExpenseItem(e.Title, e.Desc, dl, "inc"));
            }
            foreach (var e in inter.exp)
            {
                double dl = e.Val;
                exp.Add(new ExpenseItem(e.Title, e.Desc, dl, "exp"));
            }

            return new ExpenseList(exp, inc);
        }

        public static void SaveAs(string name, ExpenseList _list)
        {
            Intermediate inter = new Intermediate(_list);
            string js = JsonConvert.SerializeObject(inter);
            System.IO.File.WriteAllText(name, js);
        }
    }
}
