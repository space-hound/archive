using GameOfGame.Controls.CustomCell;
using System.Windows;
using System.Windows.Controls;
using GameOfGame.Utils;
using System.Collections.Generic;

namespace GameOfGame.Controls.CustomGrid
{
    public partial class TableGrid : UserControl
    {
        private TableCell[,] grid = new TableCell[3,3];

        private List<TableCell> listGrid = new List<TableCell>();

        public TableCell[,] Grid
        {
            get
            {
                return this.grid;
            }
        }

        private void fillGrid()
        {
            int i = 0, j = 0;

            foreach (TableCell tc in U.CopiiPatriei<TableCell>(this.GameTable))
            {
                if (j == 3)
                {
                    j = 0;
                    i++;
                }

                this.grid[i, j] = tc;
                this.listGrid.Add(tc);

                j++;
            }
        }

        public TableGrid()
        {
            InitializeComponent();
            this.fillGrid();
        }

        public RoutedEventHandler OnTableClick;
        private void TableGridClick(object sender, RoutedEventArgs e)
        {
            if (this.OnTableClick is null)
                return;
            this.OnTableClick(sender, e);
        }

        public void Reset()
        {
            foreach(TableCell tc in this.listGrid)
            {
                tc.Type = CellType.NullType;
            }
        }

        private int checkLine(int l)
        {
            int s = 0;
            for (int i = 0; i < 2; i++)
            {
                if (this.grid[l, i].Type == this.grid[l, i + 1].Type)
                    s++;
            }

            if (s == 2)
                return (int)this.grid[l, l].Type;
            return -1;
        }
        private int checkCol(int c)
        {
            int s = 0;
            for (int i = 0; i < 2; i++)
            {
                if (this.grid[i, c].Type == this.grid[i + 1, c].Type)
                    s++;
            }

            if (s == 2)
                return (int)this.grid[c, c].Type;
            return -1;
        }
        private int checkPDiag()
        {
            int s = 0;
            for(int i = 0; i < 2; i++)
            {
                if (this.grid[i, i].Type == this.grid[i + 1, i + 1].Type)
                    s++;
            }

            if (s == 2)
                return (int)this.grid[1, 1].Type;
            return -1;
        }
        private int checkSDiag()
        {
            int s = 0;

            if (this.grid[0, 2].Type == this.grid[1, 1].Type)
                s++;
            if (this.grid[1, 1].Type == this.grid[2, 0].Type)
                s++;

            if (s == 2)
                return (int)this.grid[1, 1].Type;
            return -1;
        }
        public bool isFull()
        {
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    if (this.grid[i, j].Type == CellType.NullType)
                        return false;
                }
            }

            return true;
        }

        public int Check()
        {
            for (int l = 0; l < 3; l++)
            {
                if (checkLine(l) == 1 || checkLine(l) == 2)
                    return checkLine(l);
            }

            for (int c = 0; c < 3; c++)
            {
                if (checkCol(c) == 1 || checkCol(c) == 2)
                    return checkCol(c);
            }

            if (checkPDiag() == 1 || checkPDiag() == 2)
                return checkPDiag();

            if (checkSDiag() == 1 || checkSDiag() == 2)
                return checkSDiag();

            if (isFull())
                return -1;

            return 0;
        }
    }
}
