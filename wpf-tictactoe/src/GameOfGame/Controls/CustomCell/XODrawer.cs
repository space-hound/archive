using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Shapes;

namespace GameOfGame.Controls.CustomCell
{
    public static class XODrawer
    {

        // O figure
        private static double oSize = .7;
        private static double oThick = .1;
        private static Color blue = Colors.Blue;
        private static SolidColorBrush blueBrush = new SolidColorBrush(blue);
        public static void OFigure(Canvas cvs)
        {
            double size = cvs.Width;

            var ellipse = new Ellipse
            {
                Width = oSize * size,
                Height = oSize * size,
                StrokeThickness = oThick * size,
                Stroke = blueBrush
            };

            Canvas.SetTop(ellipse, (size - ellipse.Width) / 2);
            Canvas.SetLeft(ellipse, (size - ellipse.Width) / 2);

            cvs.Children.Add(ellipse);
        }

        // X figure
        private static double xSize = .8;
        private static double xThick = .1;
        private static Color red = Colors.Red;
        private static SolidColorBrush redBrush = new SolidColorBrush(red);
        private static void setCoords(Canvas cvs, Ellipse elps)
        {
            double size = cvs.Width;

            Canvas.SetTop(elps, (size - elps.Height) / 2);
            Canvas.SetLeft(elps, (size - elps.Width) / 2);
        }
        private static void setRotation(Ellipse elps, double angle)
        {
            RotateTransform R = new RotateTransform(angle);
            R.CenterX = elps.Width / 2;
            R.CenterY = elps.Height / 2;
            elps.RenderTransform = R;
        }
        public static void XFigure(Canvas cvs)
        {
            double size = cvs.Width;

            Ellipse x1 = new Ellipse()
            {
                Width = xSize * size,
                Height = xThick * size,
                StrokeThickness = xThick * size,
                Stroke = redBrush
            };
            Ellipse x2 = new Ellipse()
            {
                Width = xSize * size,
                Height = xThick * size,
                StrokeThickness = xThick * size,
                Stroke = redBrush
            };

            setCoords(cvs, x1);
            setCoords(cvs, x2);
            setRotation(x1, 45);
            setRotation(x2, -45);


            cvs.Children.Add(x1);
            cvs.Children.Add(x2);
        }
    }
}
