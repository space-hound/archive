using Expenses.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Expenses.Controls.ExpenseControl
{
    /// <summary>
    /// Interaction logic for ExpenseControl.xaml
    /// </summary>
    public partial class ExpenseControl : UserControl
    {
        // used for testing value input for number
        static Regex doubleReg = new Regex("^[.][0-9]+$|^[0-9]*[.]{0,1}[0-9]*$");

        #region eventhandlers
        //public event handler to handle click on add button inside usercontrol
        public RoutedEventHandler OnAdd;
        #endregion


        #region events
        // raise click event on add button and handled by "OnAdd"
        private void onAddClick(object sender, RoutedEventArgs e)
        {
            this.OnAdd(sender, e);
        }
        // handle reset button click, no need for exposing, used only inside of usercontrol
        private void onResetClick(object sender, RoutedEventArgs e)
        {
            this.Reset();
        }
        //expose the reset method so can be used in code in other scopes
        public void Reset()
        {
            this.TitleBox.Text = "";
            this.TypeBox.SelectedIndex = 0;
            this.DescBox.Text = "";
            this.ValBox.Text = "";
        }
        //test value input and "restrict" it to only doubles
        private void onTextPreviewInput(object sender, TextCompositionEventArgs e)
        {
            e.Handled = this.isDouble(e.Text);
        }
        #endregion

        #region eventhelpers
        //use regex and test if value input text can be converted to double
        bool isDouble(string number)
        {
            return !doubleReg.IsMatch(number);
        }
        #endregion

        #region constructor
        public ExpenseControl()
        {
            InitializeComponent();

            this.events();
        }
        //add events handler for add button, reset button, value input "on typing"
        void events()
        {
            this.AddItem.Click += this.onAddClick;
            this.ResetItem.Click += this.onResetClick;
            this.ValBox.PreviewTextInput += this.onTextPreviewInput;
        }
        #endregion

        #region properties
        public string Title
        {
            get
            {
                return this.TitleBox.Text;
            }
            set
            {
                this.TitleBox.Text = value.ToString();
            }
        }

        public string Type
        {
            get
            {
                return this.getType();
            }
            set
            {
                this.setType(value);
            }
        }
        private void setType(string val)
        {
            if (val == "exp")
                this.TypeBox.SelectedIndex = 0;
            else
                this.TypeBox.SelectedIndex = 1;
        }
        string getType()
        {
            var selected = (ComboBoxItem)this.TypeBox.SelectedItem;

            return selected.Tag.ToString();
        }

        public string Desc
        {
            get
            {
                return this.DescBox.Text;
            }
            set
            {
                this.DescBox.Text = value;
            }
        }
        public double Val
        {
            get
            {
                return this.getVal();
            }
            set
            {
                this.ValBox.Text = value.ToString();
            }
        }
        double getVal()
        {
            double val;
            if (!Double.TryParse(this.ValBox.Text, out val))
                return 0;
            return val;
        }

        //returns a ExpenseItem for easy manypulation
        public ExpenseItem Item
        {
            get
            {
                return new ExpenseItem(this.Title, this.Desc, this.Val, this.Type);
            }
        }
        #endregion
    }
}
