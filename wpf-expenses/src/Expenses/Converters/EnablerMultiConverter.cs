using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;

namespace Expenses.Converters
{
    public class EnablerMultiConverter : IMultiValueConverter
    {
        //takes strings depending on them length returns true/false
        public object Convert(object[] values, Type targetType, object parameter, System.Globalization.CultureInfo culture)
        {
            if(values.Count() < 2)
            {
                return false;
            }

            return (((string)values[0]).Length > 0 && ((string)values[1]).Length > 0);
        }

        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, System.Globalization.CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
