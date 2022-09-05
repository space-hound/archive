using System.Drawing;
using System.Windows.Forms;

using producer_consumer.Utils;

namespace producer_consumer.PCQueue
{
    class QueueElement
    {
        #region Properties
        public int Value { get; set; }
        #endregion

        #region Container
        private TableLayoutPanel Container;
        private void BuildContainer()
        {
            this.Container = new TableLayoutPanel();
            this.Container.Size = new Size(72, 72);
            this.Container.BackColor = Color.FromArgb(0, 0, 0);
            this.Container.Margin = new Padding(3, 0, 3, 0);
            this.Container.Padding = new Padding(4, 4, 4, 4);
            TableLayoutPanelBuilder.RowsBuilder(this.Container, new float[] { 100 });
            TableLayoutPanelBuilder.ColumnsBuilder(this.Container, new float[] { 100 });

        }
        #endregion

        #region LabelValue
        private Label LabelValue;
        private void BuildLabelValue()
        {
            this.LabelValue = new Label();
            this.LabelValue.Dock = DockStyle.Fill;
            this.LabelValue.BackColor = Color.FromArgb(255, 255, 255);
            this.LabelValue.ForeColor = Color.FromArgb(0, 0, 0);
            this.LabelValue.Font = new Font("Consolas", 16, FontStyle.Bold);
            this.LabelValue.TextAlign = ContentAlignment.MiddleCenter;
            this.LabelValue.Padding = new Padding(0);
            this.LabelValue.Margin = new Padding(0);
            this.LabelValue.Text = this.Value.ToString();

            this.Container.Controls.Add(this.LabelValue, 0, 0);
        }
        #endregion

        #region Constructor
        public QueueElement(int value)
        {
            this.Value = value;

            this.BuildContainer();
            this.BuildLabelValue();
        }
        #endregion

        #region Methods
        public void Attach(FlowLayoutPanel parent)
        {
            parent.Controls.Add(this.Container);
        }
        public void Dettach(FlowLayoutPanel parent)
        {
            parent.Controls.Remove(this.Container);
        }
        public void SetVal(int val)
        {
            this.Value = val;
            this.LabelValue.Text = val.ToString();
        }
        #endregion
    }
}
