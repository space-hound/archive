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

namespace GameOfGame.Controls.NameControl
{
    /// <summary>
    /// Interaction logic for NameControl.xaml
    /// </summary>
    public partial class NameControl : UserControl
    {
        public string Name
        {
            get
            {
                return this.PlayerName.Text;
            }
            set
            {
                this.PlayerName.Text = value;
            }
        }
        public int Score
        {
            get
            {
                return Convert.ToInt32(this.PlayerScore.Text);
            }
            set
            {
                this.PlayerScore.Text = Convert.ToString(value);
            }
        }

        public NameControl()
        {
            InitializeComponent();
        }
    }
}
