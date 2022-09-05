using GameOfGame.Controls.CustomCell;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace GameOfGame.Controls.PlayerControl
{
    public partial class PlayerControl : UserControl
    {
        public PlayerControl()
        {
            InitializeComponent();
            this.GameInfo.Visibility = Visibility.Hidden;
            this.events();
        }

        public void SetNames(string n1, string n2)
        {
            this.PlayerOne.Name = n1;
            this.PlayerTwo.Name = n2;
        }
        private int score1 = 0;
        private int score2 = 0;

        private int cp = 1;

        private void events()
        {
            this.GameTable.OnTableClick = new RoutedEventHandler(OnTableClick);
            this.Reset.Click += Reset_Click;
        }

        private void Reset_Click(object sender, RoutedEventArgs e)
        {
            this.GameTable.Reset();
            this.GameInfo.Visibility = Visibility.Hidden;
            this.isRun = true;
        }

        private bool isRun = true;

        private void OnTableClick(object sender, RoutedEventArgs e)
        {
            if (!isRun)
                return;

            if (((TableCell)e.Source).Type != CellType.NullType)
                return;

            ((TableCell)e.Source).Type = (CellType)cp;

            if (this.GameTable.Check() == -1
                ||
                this.GameTable.Check() == 1
                ||
                this.GameTable.Check() == 2)
            {
                this.isRun = false;
                this.stopGame();
            }

            if (cp == 1)
                cp = 2;
            else
                cp = 1;

        }

        private void stopGame()
        {
            this.GameInfo.Visibility = Visibility.Visible;

            this.WinnerBlock.Text = "Winner : ";

            if(this.GameTable.Check() == -1)
            {
                this.WinnerBlock.Text += "NOBODY !";
            }
            else if (this.GameTable.Check() == 1)
            {
                this.WinnerBlock.Text += this.PlayerOne.Name;
                this.PlayerOne.Score = ++this.score1;
            }
            else
            {
                this.WinnerBlock.Text += this.PlayerTwo.Name;
                this.PlayerTwo.Score = ++this.score2;
            }
        }
    }
}
