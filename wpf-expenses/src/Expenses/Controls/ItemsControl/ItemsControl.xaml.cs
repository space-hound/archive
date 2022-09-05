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

namespace Expenses.Controls.ItemsControl
{
    /// <summary>
    /// Interaction logic for ItemsControl.xaml
    /// </summary>
    public partial class ItemsControl : UserControl
    {
        // used for testing value input for number
        static Regex doubleReg = new Regex("^[.][0-9]+$|^[0-9]*[.]{0,1}[0-9]*$");

        #region eventhandlers
        //handle event raised by update
        public RoutedEventHandler OnUpdate;
        //handle event raised by delete
        public RoutedEventHandler OnDelete;
        //handle event raised by switch
        public RoutedEventHandler OnSwitch;
        #endregion


        #region events
        //actual event raised by update button
        private void onUpdate(object sender, RoutedEventArgs e)
        {
            this.OnUpdate(sender, e);
        }
        //actual event raised by delete button
        private void onDelete(object sender, RoutedEventArgs e)
        {
            this.OnDelete(sender, e);
        }
        //actual event raised by switch button
        private void onSwitch(object sender, RoutedEventArgs e)
        {
            this.OnSwitch(sender, e);
        }
        //test value input and "restrict" it to only doubles
        private void onTextPreviewInput(object sender, TextCompositionEventArgs e)
        {
            e.Handled = this.isDouble(e.Text);
        }
        #endregion

        #region eventhelpers
        //text value input text if can be converted to double
        bool isDouble(string number)
        {
            return !doubleReg.IsMatch(number);
        }
        #endregion

        #region constructor
        public ItemsControl()
        {
            InitializeComponent();

            this.events();
        }
        //add events handler for add button, update button, delete button, value input "on typing"
        void events()
        {
            this.Update.Click += this.onUpdate;
            this.Delete.Click += this.onDelete;
            this.Switch.Click += this.onSwitch;
            this.ValBox.PreviewTextInput += this.onTextPreviewInput;
        }
        #endregion

        #region properties
        //dependency properties Type to be set it in XAML, never changes
        public static readonly DependencyProperty TypePropety =
         DependencyProperty.Register("Type", typeof(string), typeof(ItemsControl), new
            PropertyMetadata(""));
        public string Type
        {
            get { return (string)GetValue(TypePropety); }
            set { SetValue(TypePropety, value); }
        }

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
            set
            {
                this.updateView(value);
            }
        }
        private void updateView(ExpenseItem itm)
        {
            if (itm.Type != this.Type)
                return;

            this.Title = itm.Title;
            this.Desc = itm.Desc;
            this.Val = itm.Val;
        }
        #endregion
    }
}
