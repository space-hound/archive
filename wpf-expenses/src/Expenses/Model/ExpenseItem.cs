using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Expenses.Model
{
    public enum ExpenseItemType
    {
        Exp,
        Inc
    }

    public class ExpenseItem
    {
        private static string[] TYPES = { "exp", "EXP", "inc", "INC" };

        #region properties
        private string type = "exp";
        public string Type
        {
            get
            {
                return this.type;
            }
        }
        private string title = "";
        public string Title
        {
            get
            {
                return this.title;
            }
            set
            {
                this.title = value;
            }
        }
        private string desc = "";
        public string Desc
        {
            get
            {
                return this.desc;
            }
            set
            {
                this.desc = value;
            }
        }
        private double val = 0.00;
        public Double Val
        {
            get
            {
                return this.val;
            }
            set
            {
                this.val = value;
            }
        }
        #endregion

        #region constructor/s

        public ExpenseItem() { }
        public ExpenseItem(string _title, string _desc, double _val, string _type = "exp")
        {
            this.title = _title;
            this.desc = _desc;
            this.val = this.evalVal(_type, _val);
            this.type = this.evalType(_type);
        }

        // EVALUATES TYPE TO BE OF ACCEPTED TYPE //
        string evalType(string _type)
        {
            if (_type.GetType() != typeof(string))
                return "exp";
            if (!TYPES.Contains(_type))
                return "exp";

            return _type.ToLower();
        }
        double evalVal(string _type, double _val)
        {
            if (this.evalType(_type) == "exp")
                return Math.Abs(_val);
            else
                return Math.Abs(_val);

        }
        #endregion

        #region methods
        public bool IsExp()
        {
            return this.type == TYPES[0] || this.type == TYPES[1];
        }
        public bool IsInc()
        {
            return this.type == TYPES[2] || this.type == TYPES[3];
        }
        public void SwitchType()
        {
            if (this.IsExp())
                this.type = "inc";
            else
                this.type = "exp";
        }

        public double GetSignedVal()
        {
            if (this.IsExp())
                return this.val * -1;
            else
                return this.val;
        }
        public double GetSign()
        {
            if (this.IsExp())
                return -1;
            else
                return 1;
        }
        #endregion
    }
}
