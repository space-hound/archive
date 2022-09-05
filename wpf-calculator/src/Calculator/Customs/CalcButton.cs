using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using Calculator.Logic;

namespace Calculator.Customs
{
    public enum Actions
    {
        Plus, Minus, Multi, Div, Del, Equal, C, Zero, One, Two, Three, For, Five, Six, Seven, Eight, Nine
    }

    public class CalcButton : Button
    {
        //Overide in order to be rendered
        static CalcButton()
        {
            DefaultStyleKeyProperty.OverrideMetadata(typeof(CalcButton), new FrameworkPropertyMetadata(typeof(CalcButton)));
        }

        public static readonly DependencyProperty ActionProperty =
         DependencyProperty.Register("Action",
                      typeof(Actions),
                      typeof(CalcButton),
              new FrameworkPropertyMetadata(Actions.Plus));

        public Actions Action
        {
            get { return (Actions)GetValue(ActionProperty); }
            set { SetValue(ActionProperty, value); }
        }

        private string _ActionValue()
        {
            int type = (int)(Actions)GetValue(ActionProperty);

            if(type >= 0 && type <= 3)
            {
                return Types.pasOp[type];
            }

            if (type >= 4 && type <= 6)
            {
                return Types.actOp[type - 4];
            }

            if (type >= 7 && type <= 16)
            {
                return Types.num[type - 7];
            }

            return "null";
        }

        //public static readonly DependencyProperty ActionValueProperty =
        // DependencyProperty.Register("ActionValue", typeof(string),
        //              typeof(CalcButton),
        //      new FrameworkPropertyMetadata(String.Empty));

        public string ActionValue
        {
            get
            {
                return this._ActionValue();
            }
        }

        //public static readonly DependencyProperty TypeProperty =
        // DependencyProperty.Register("Type", typeof(string),
        //              typeof(CalcButton),
        //      new FrameworkPropertyMetadata(String.Empty));

        private string type()
        {
            string action = this.ActionValue;

            if (Types.pasOp.Contains(action))
            {
                return "passive";
            }

            if (Types.actOp.Contains(action))
            {
                return "active";
            }

            if (Types.num.Contains(action))
            {
                return "number";
            }

            return "invalid";
        }

        public string Type
        {
            get
            {
                return this.type();
            }
        }
    }
}
