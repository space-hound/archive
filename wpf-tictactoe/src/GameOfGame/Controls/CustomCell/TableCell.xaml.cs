using System;
using System.Windows;
using System.Windows.Controls;

namespace GameOfGame.Controls.CustomCell
{
    /*
     * It should be a CustomControl as it extends te usage of a button
     * But for simplicity I'll use a UserControl
     */
    public partial class TableCell : UserControl
    {
        /*
         public static readonly DependencyProperty SizeProperty =
         DependencyProperty.Register("Size", typeof(double), typeof(TableCell), new
            PropertyMetadata(100.0));
        private void setSize(double val)
        {
            this.Cell.Width = val;
            this.Cell.Height = val;
            this.CellContent.Width = val;
            this.CellContent.Height = val;
        }
        public double Size
        {
            get { return (double)GetValue(SizeProperty); }
            set { SetValue(SizeProperty, value); this.setSize(value); }
        }

        public static readonly DependencyProperty CellTypeProperty =
          DependencyProperty.Register("CellType", typeof(CellType), typeof(TableCell), new
             PropertyMetadata(CellType.NullType));
        private void setType(CellType ct)
        {
            switch (ct)
            {
                case CellType.NullType:
                    this.CellContent.Children.Clear();
                    break;
                case CellType.OType:
                    XODrawer.OFigure(this.CellContent);
                    break;
                case CellType.XType:
                    XODrawer.XFigure(this.CellContent);
                    break;
                default:
                    break;
            }
        }
        public CellType CellType
        {
            get { return (CellType)GetValue(CellTypeProperty); }
            set { SetValue(CellTypeProperty, value); this.setType(value); }
        }
        */

        private double size = 200;
        public double Size
        {
            get
            {
                return this.size;
            }
            set
            {
                this.setSize(value);
            }
        }
        private void setSize(double val)
        {
            this.size = val;
            this.Cell.Width = val;
            this.Cell.Height = val;
            this.CellContent.Width = val;
            this.CellContent.Height = val;
        }

        private CellType type;
        public CellType Type
        {
            get
            {
                return this.type;
            }
            set
            {
                this.setType(value);
            }
        }
        private void setType(CellType val)
        {
            this.type = val;
            switch (val)
            {
                case CellType.NullType:
                    this.CellContent.Children.Clear();
                    break;
                case CellType.OType:
                    XODrawer.OFigure(this.CellContent);
                    break;
                case CellType.XType:
                    XODrawer.XFigure(this.CellContent);
                    break;
                default:
                    throw new ArgumentException("NULL");
            }
        }

        public TableCell()
        {
            InitializeComponent();
            this.DataContext = this;
            this.events();
        }

        private void events()
        {
            this.Cell.Click += onCellCLick;
        }
        public RoutedEventHandler OnCellCLick;
        private void onCellCLick(object sender, RoutedEventArgs e)
        {
            if (this.OnCellCLick is null)
                return;

            this.OnCellCLick(sender, e);
        }
    }
}
