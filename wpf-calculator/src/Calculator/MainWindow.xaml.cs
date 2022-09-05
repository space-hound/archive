using Calculator.Customs;
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

namespace Calculator
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        MSScriptControl.ScriptControl sc;

        public MainWindow()
        {
            InitializeComponent();
            sc = new MSScriptControl.ScriptControl();
            sc.Language = "VBScript";
        }

        private static string test = "";
        private static bool can = false;

        private void CalcButton_Click(object sender, RoutedEventArgs e)
        {
            can = false;

            CalcButton a = (CalcButton)e.Source;

            if(a.Type == "number" || a.Type == "passive")
            {
                test += a.ActionValue;
            }

            if(a.Type == "active")
            {
                if(a.ActionValue == "del")
                {
                    if(test.Length >= 1)
                    {
                        test = test.Remove(test.Length - 1);
                    }

                    //try
                    //{
                    //    test = test.Remove(test.Length - 1);
                    //}
                    //catch
                    //{

                    //}
                }

                if(a.ActionValue == "C")
                {
                    test = "";
                }

                if(a.ActionValue == "=")
                {
                    test = sc.Eval(test).ToString();
                    can = true;

                }

            }

            this.Screen.Text = test;
        }

        private void CommandBinding_Executed(object sender, ExecutedRoutedEventArgs e)
        {
            Clipboard.SetText(Screen.Text);
        }

        private void CommandBinding_CanExecute(object sender, CanExecuteRoutedEventArgs e)
        {
            e.CanExecute = can;
        }
    }
}
