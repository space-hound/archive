using System.Windows.Forms;

namespace producer_consumer.Utils
{
    public static class TableLayoutPanelBuilder
    {
        public static void ColumnsBuilder(TableLayoutPanel tlp, float[] columns)
        {
            int size = columns.Length;

            tlp.ColumnCount = size;

            for (int i = 0; i < size; i++)
            {
                tlp.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, columns[i]));
            }
        }

        public static void RowsBuilder(TableLayoutPanel tlp, float[] rows)
        {
            int size = rows.Length;

            tlp.RowCount = size;

            for (int i = 0; i < size; i++)
            {
                tlp.RowStyles.Add(new RowStyle(SizeType.Percent, rows[i]));
            }
        }
    }
}
