using System;
using System.Windows.Data;
using System.Globalization;

namespace Expenses.Converters
{
    public class ScreenSizeComputeConverter : IValueConverter
    {
        //takes computer size and returns a percent of it
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            double screenSize = System.Convert.ToDouble(value);
            double percent = System.Convert.ToDouble(parameter, CultureInfo.InvariantCulture);

            return ((int)(screenSize * percent)).ToString("G0", CultureInfo.InvariantCulture);
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
