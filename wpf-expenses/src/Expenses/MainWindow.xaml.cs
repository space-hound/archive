using Expenses.Engine;
using Expenses.Model;
using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

namespace Expenses
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private ExpenseList list;
        public ExpenseList List
        {
            get
            {
                return this.list;
            }
            set
            {
                this.list = value;
            }
        }

        private void OnLoad()
        {

            this.list = new ExpenseList();

            //events
            this.ItemControl.OnAdd = new RoutedEventHandler(AddItem);
            this.ExpControl.OnUpdate = new RoutedEventHandler(UpdateExp);
            this.ExpControl.OnDelete = new RoutedEventHandler(DeleteExp);
            this.ExpControl.OnSwitch = new RoutedEventHandler(SwitchExp);

            this.IncControl.OnUpdate = new RoutedEventHandler(UpdateInc);
            this.IncControl.OnDelete = new RoutedEventHandler(DeleteInc);
            this.IncControl.OnSwitch = new RoutedEventHandler(SwitchInc);

            this.IncList.ItemsSource = this.list.Inc;
            this.ExpList.ItemsSource = this.list.Exp;

            this.DataContext = this;
        }

        private void loadedFIle(ExpenseList _list)
        {
            this.list = new ExpenseList(_list.Exp, _list.Inc);
            this.IncList.ItemsSource = this.list.Inc;
            this.ExpList.ItemsSource = this.list.Exp;

            this.DataContext = this;
            this.updateIndo();
        }

        private void updateIndo()
        {
            this.TotalExp.Text = this.list.ExpSum.ToString();
            this.TotalInc.Text = this.list.IncSum.ToString();
            this.TotalFinal.Text = this.list.FinalSum.ToString();
        }


        /***********************************************************************
         * CONSTRUCTOR
         ***********************************************************************/
        public MainWindow()
        {
            InitializeComponent();
            this.OnLoad();
        }

        /***********************************************************************
         * INCOME SECTION
         ***********************************************************************/
        private int selInc = -1;
        private void IncListSelection(object sender, SelectionChangedEventArgs e)
        {
            if (this.IncList.Items.Count == 0)
                return;

            this.selInc = this.IncList.SelectedIndex;
            if (this.selInc > this.list.Inc.Count || this.selInc < 0)
                return;

            this.IncControl.Item = this.list.Inc[this.selInc];
        }

        private void UpdateInc(object sender, RoutedEventArgs e)
        {
            if (this.selInc > this.list.Inc.Count || this.selInc < 0)
                return;

            ExpenseItem itm = this.IncControl.Item;

            int temp = this.selInc;

            this.list.ModIncAt(itm, this.selInc);
            this.updateIndo();

            this.selInc = temp;
        }
        private void DeleteInc(object sender, RoutedEventArgs e)
        {
            if (this.selInc > this.list.Inc.Count || this.selInc < 0)
                return;

            this.list.RemoveIncAt(this.selInc);
            this.updateIndo();
        }
        private void SwitchInc(object sender, RoutedEventArgs e)
        {
            if (this.selInc > this.list.Inc.Count || this.selInc < 0)
                return;

            ExpenseItem itm = this.IncControl.Item;
            this.list.SwitchInc(this.selInc);
            this.updateIndo();
        }

        /***********************************************************************
         * EXPENSES SECTION
         ***********************************************************************/
        private int selExp = -1;
        private void ExpListSelection(object sender, SelectionChangedEventArgs e)
        {
            if (this.ExpList.Items.Count == 0)
                return;

            this.selExp = this.ExpList.SelectedIndex;
            if (this.selExp > this.list.Exp.Count || this.selExp < 0)
                return;

            this.ExpControl.Item = this.list.Exp[this.selExp];
        }

        private void UpdateExp(object sender, RoutedEventArgs e)
        {
            if (this.selExp > this.list.Exp.Count || this.selExp < 0)
                return;

            ExpenseItem itm = this.ExpControl.Item;

            int temp = this.selExp;

            this.list.ModExpAt(itm, this.selExp);
            this.updateIndo();

            this.selExp = temp;
        }
        private void DeleteExp(object sender, RoutedEventArgs e)
        {
            if (this.selExp > this.list.Exp.Count || this.selExp < 0)
                return;

            this.list.RemoveExpAt(this.selExp);
            this.updateIndo();
        }
        private void SwitchExp(object sender, RoutedEventArgs e)
        {
            if (this.selExp > this.list.Exp.Count || this.selExp < 0)
                return;

            ExpenseItem itm = this.ExpControl.Item;
            this.list.SwitchExp(this.selExp);
            this.updateIndo();
        }

        /***********************************************************************
         * TOP CENTRAL SECTION
         ***********************************************************************/
        private void AddItem(object sender, RoutedEventArgs e)
        {
            this.list.AddItem(this.ItemControl.Item);
            this.updateIndo();
            this.ItemControl.Reset();
        }

        /***********************************************************************
         * MENU SECTION
         ***********************************************************************/

        private void MenuClick(object sender, RoutedEventArgs e)
        {
            string menu = ((MenuItem)e.OriginalSource).Name;

            switch (menu)
            {
                case "menuReset":
                    break;
                case "menuSave":
                    this.save();
                    break;
                case "menuLoad":
                    this.load();
                    break;
                case "menuExit":
                    this.Close();
                    break;
            }
        }

        void load()
        {
            var ofd = new OpenFileDialog
            {
                Filter = "Json files (*.json)|*.json|Text files (*.txt)|*.txt"
            };

            if (ofd.ShowDialog() == true)
            {
                this.loadedFIle(FileFlask.Load(ofd.FileName));
            }
        }
        void save()
        {
            var sfd = new SaveFileDialog
            {
                Filter = "Json files (*.json)|*.json|Text files (*.txt)|*.txt"
            };

            if (sfd.ShowDialog() == true)
            {
                string filename = sfd.FileName;
                FileFlask.SaveAs(filename, this.list);
            }
        }
    }
}
