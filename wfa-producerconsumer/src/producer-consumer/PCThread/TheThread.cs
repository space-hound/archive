using System;
using System.Drawing;
using System.Windows.Forms;

using producer_consumer.Utils;

namespace producer_consumer.PCThread
{
    class TheThread
    {
        #region StaticFields
        static Random rnd = new Random();
        static Color[] colorTypes = new Color[] { Color.FromArgb(0, 160, 62), Color.FromArgb(253, 95, 0) };
        static String[] labelTypes = new String[] { "Type: Producer", "Type: Consumer" };
        #endregion

        #region Fields
        int[] wait;
        int[] execute;
        private int? currentVal, currentTime, lastVal, lastTime;
        private DateTime? currentDate, lastDate;
        #endregion

        #region Properties
        public int Type { get; private set; }
        #endregion

        #region OuterContainer
        /*
         * background = 0, 162, 232
         * margin = 0, 0, 0, 0
         * padding = 12, 12, 12, 12
         * size = 322, 201
         */
        private Panel OuterContainer;
        private void BuildOuterContainer()
        {
            this.OuterContainer = new Panel();
            this.OuterContainer.BackColor = Color.FromArgb(0, 162, 232);
            this.OuterContainer.Margin = new Padding(0, 0, 0, 0);
            this.OuterContainer.Padding = new Padding(12, 12, 12, 12);
            this.OuterContainer.Size = new Size(322, 201);
        }
        #endregion

        #region InnerContainer
        /*
         * background = 0, 0, 0
         * margin = 3, 3, 3, 3
         * padding = 3, 3, 3, 3
         * dock = Fill
         * columns = [100]
         * rows = [33.33, 33.33, 33.33]
         */
        private TableLayoutPanel InnerContainer;
        private void BuildInnerContainer()
        {
            this.InnerContainer = new TableLayoutPanel();
            this.InnerContainer.BackColor = Color.FromArgb(0, 0, 0);
            this.InnerContainer.Margin = new Padding(3, 3, 3, 3);
            this.InnerContainer.Padding = new Padding(3, 3, 3, 3);
            this.InnerContainer.Dock = DockStyle.Fill;
            TableLayoutPanelBuilder.ColumnsBuilder(this.InnerContainer, new float[] { 100 });
            TableLayoutPanelBuilder.RowsBuilder(this.InnerContainer, new float[] { 33.33f, 33.33f, 33.33f });
        }
        #endregion

        #region TypeLabel
        /*
         * font = Consolas, 16, Bold
         * fore-color = 255, 255, 255
         * text-align = MiddleCenter
         * margin = 0, 0, 0, 0
         * padding = 0, 0, 0, 0
         * dock = Fill
         * span = (0, 0);
         */
        private Label TypeLabel;
        private void BuildTypeLabel()
        {
            this.TypeLabel = new Label();
            this.TypeLabel.Font = new Font("Consolas", 16, FontStyle.Bold);
            this.TypeLabel.ForeColor = Color.FromArgb(255, 255, 255);
            this.TypeLabel.TextAlign = ContentAlignment.MiddleCenter;
            this.TypeLabel.Margin = new Padding(0, 0, 0, 0);
            this.TypeLabel.Padding = new Padding(0, 0, 0, 0);
            this.TypeLabel.Dock = DockStyle.Fill;
            this.TypeLabel.Text = labelTypes[this.Type];
            this.TypeLabel.BackColor = colorTypes[this.Type];
        }
        #endregion

        #region CurrentAction
        private TableLayoutPanel CurrentActionContainer;
        private Label CurrentValueLabel;
        private Label CurrentIntervalLabel;
        private Label CurrentDateLabel;
        private void BuildCurrentAction()
        {
            this.CurrentActionContainer = ActionTableBuilder();
            this.CurrentValueLabel = ActionLabelBuilder();
            this.CurrentIntervalLabel = ActionLabelBuilder();
            this.CurrentDateLabel = ActionLabelBuilder();

            this.CurrentActionContainer.Margin = new Padding(0, 3, 0, 3);
            this.CurrentIntervalLabel.Margin = new Padding(3, 0, 3, 0);
            this.CurrentDateLabel.Text = "--:--:--";

            this.CurrentActionContainer.Controls.Add(
                this.CurrentValueLabel,
                0, 0
            );

            this.CurrentActionContainer.Controls.Add(
                this.CurrentIntervalLabel,
                1, 0
            );

            this.CurrentActionContainer.Controls.Add(
                this.CurrentDateLabel,
                2, 0
            );
        }
        #endregion

        #region LastAction
        private TableLayoutPanel LastActionContainer;
        private Label LastValueLabel;
        private Label LastIntervalLabel;
        private Label LastDateLabel;
        private void BuildLastAction()
        {
            this.LastActionContainer = ActionTableBuilder();
            this.LastValueLabel = ActionLabelBuilder();
            this.LastIntervalLabel = ActionLabelBuilder();
            this.LastDateLabel = ActionLabelBuilder();

            this.LastIntervalLabel.Margin = new Padding(3, 0, 3, 0);
            this.LastDateLabel.Text = "--:--:--";

            this.LastActionContainer.Controls.Add(
                this.LastValueLabel,
                0, 0
            );

            this.LastActionContainer.Controls.Add(
                this.LastIntervalLabel,
                1, 0
            );

            this.LastActionContainer.Controls.Add(
                this.LastDateLabel,
                2, 0
            );
        }
        #endregion

        #region Constructors
        public TheThread(int type, int[]wait, int[] execute)
        {
            this.Type = type;
            this.Build();

            this.wait = wait;
            this.execute = execute;
        }
        #endregion

        #region Methods
        public void Attach(FlowLayoutPanel parent)
        {
            parent.Controls.Add(this.OuterContainer);
        }
        public void Dettach(FlowLayoutPanel parent)
        {
            parent.Controls.Remove(this.OuterContainer);
        }
        public void CurrentAction(int value, int interval, DateTime date)
        {
            bool canUpdateLast = false;

            if(currentTime != null && currentDate != null && currentVal != null)
            {
                this.lastVal = this.currentVal;
                this.lastTime = this.currentTime;
                this.lastDate = this.currentDate;
                canUpdateLast = true;
            }

            this.currentVal = value;
            this.currentTime = interval;
            this.currentDate = date;

            this.CurrentValueLabel.Text = value.ToString();
            this.CurrentIntervalLabel.Text = interval.ToString();
            this.CurrentDateLabel.Text = date.ToString("HH:mm:ss");

            if(canUpdateLast)
            {
                this.LastAction(this.lastVal, this.lastTime, this.lastDate);
            }
        }
        public void LastAction(int? value, int? interval, DateTime? date)
        {
            this.LastValueLabel.Text = value.ToString();
            this.LastIntervalLabel.Text = interval.ToString();
            this.LastDateLabel.Text = (date != null ? ((DateTime)date).ToString("HH:mm:ss") : "n/a");
        }
        public void ResetCurrentAction()
        {
            this.CurrentValueLabel.Text = "-";
            this.CurrentIntervalLabel.Text = "-";
            this.CurrentDateLabel.Text = "--:--:--";
        }
        public void ResetLastAction()
        {
            this.LastValueLabel.Text = "-";
            this.LastIntervalLabel.Text = "-";
            this.LastDateLabel.Text = "--:--:--";
        }
        public int WaitTime()
        {
            if (this.wait.Length == 1)
            {
                return this.wait[0];
            }

            return rnd.Next(this.wait[0], this.wait[1]);
        }
        public int ExecTime()
        {
            if (this.execute.Length == 1)
            {
                return this.execute[0];
            }

            return rnd.Next(this.execute[0], this.execute[1]);
        }
        #endregion

        #region Utills
        /*
         * dock = Fill
         * background = 0, 0, 0
         * margin = 0, 0, 0, 0
         * padding = 0, 0, 0, 0
         * rows = [100]
         * columns = [30, 30, 40]
         */
        private static TableLayoutPanel ActionTableBuilder()
        {
            TableLayoutPanel tlp = new TableLayoutPanel();
            tlp.Dock = DockStyle.Fill;
            tlp.BackColor = Color.FromArgb(0, 0, 0);
            tlp.Margin = new Padding(0, 0, 0, 0);
            tlp.Padding = new Padding(0, 0, 0, 0);
            TableLayoutPanelBuilder.RowsBuilder(tlp, new float[] { 100 });
            TableLayoutPanelBuilder.ColumnsBuilder(tlp, new float[] { 30, 30, 40 });

            return tlp;
        }

        /*
         * background = 255, 255, 255
         * margin = 0, 0, 0, 0
         * padding = 0, 0, 0, 0
         * font = Consolas, 16, Bold
         * fore-color = 0, 0, 0
         * text = "-"
         * text-align = MiddleCenter
         * dock = Fill
         */
        private static Label ActionLabelBuilder()
        {
            Label l = new Label();
            l.BackColor = Color.FromArgb(255, 255, 255);
            l.Margin = new Padding(0, 0, 0, 0);
            l.Padding = new Padding(0, 0, 0, 0);
            l.Font = new Font("Consolas", 16, FontStyle.Bold);
            l.ForeColor = Color.FromArgb(0, 0, 0);
            l.Text = "-";
            l.TextAlign = ContentAlignment.MiddleCenter;
            l.Dock = DockStyle.Fill;

            return l;
        }

        private void Build()
        {
            this.BuildOuterContainer();
            this.BuildInnerContainer();
            this.BuildTypeLabel();
            this.BuildCurrentAction();
            this.BuildLastAction();

            this.InnerContainer.Parent = this.OuterContainer;
            this.InnerContainer.Controls.Add(this.TypeLabel, 0, 0);
            this.InnerContainer.Controls.Add(this.CurrentActionContainer, 0, 1);
            this.InnerContainer.Controls.Add(this.LastActionContainer, 0, 2);
        }
        #endregion
    }
}
