using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;
using System.Windows.Media;

namespace Expenses.Converters
{
    public class ColorConverter : IValueConverter
    {
        //takes string, depending on its value returns color
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            string type = System.Convert.ToString(value);

            if (type == "exp")
                return Color.FromRgb(213, 0, 0);
            else
                return Color.FromRgb(118, 255, 3);
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
