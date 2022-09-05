using System.Windows;
using System.Windows.Media;
using System.Collections.Generic;

namespace GameOfGame.Utils
{
    class U
    {
        /*
         *  https://www.codeproject.com/Questions/676213/How-to-get-all-controls-in-wpf-window
         *  
         *  recursively searchs for the childrens of type T and "returns" them at each iteration of foreach
         *
         */

        public static IEnumerable<T> CopiiPatriei<T>(DependencyObject depObj) where T : DependencyObject
        {
            if (depObj != null)
            {
                for (int i = 0; i < VisualTreeHelper.GetChildrenCount(depObj); i++)
                {

                    DependencyObject child = VisualTreeHelper.GetChild(depObj, i);

                    if (child != null && child is T)

                    {

                        yield return (T)child;

                    }

                    foreach (T childOfChild in CopiiPatriei<T>(child))
                    {
                        yield return childOfChild;
                    }
                }
            }
        }
    }
}
