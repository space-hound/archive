using System;
using System.Windows.Forms;
using System.Runtime.InteropServices;

using producer_consumer.PCThread;

namespace producer_consumer
{
    public partial class MainForm : Form
    {

        //protected override CreateParams CreateParams
        //{
        //    get
        //    {
        //        CreateParams cp = base.CreateParams;
        //        cp.ExStyle |= 0x02000000;
        //        return cp;
        //    }
        //}

        internal static readonly int GWL_EXSTYLE = -20;
        internal static readonly int WS_EX_COMPOSITED = 0x02000000;

        [DllImport("user32")]
        internal static extern int GetWindowLong(IntPtr hWnd, int nIndex);

        [DllImport("user32")]
        internal static extern int SetWindowLong(IntPtr hWnd, int nIndex, int dwNewLong);

        static Random rnd = new Random();

        public MainForm()
        {
            InitializeComponent();

            int style = GetWindowLong(this.Handle, GWL_EXSTYLE);
            style |= WS_EX_COMPOSITED;
            SetWindowLong(this.Handle, GWL_EXSTYLE, style);

            this.SetStyle(ControlStyles.DoubleBuffer, true);
            //this.SetStyle(ControlStyles.AllPaintingInWmPaint, true);
            //this.SetStyle(ControlStyles.UserPaint, true);
            //this.SetStyle(ControlStyles.SupportsTransparentBackColor, false);
            //this.SetStyle(ControlStyles.Opaque, false);
            //this.SetStyle(ControlStyles.OptimizedDoubleBuffer, true);
            //this.SetStyle(ControlStyles.ResizeRedraw, true);
        }

        ProducerConsumer app;

        private void MainForm_Load(object sender, EventArgs e)
        {
            
            this.app = new ProducerConsumer(
                this,
                this.QueueFlowLayoutPanel,
                this.ThreadsFlowLayoutPanel,
                this.GeneralLogTextBox
           );

        }

        private void AddThreadButton_Click(object sender, EventArgs e)
        {
            int type; int[] wait, exec;
            ThreadCreator thC = new ThreadCreator();

            thC.Callback += (int _type, int[] _wait, int[] _exec) =>
            {
                type = _type;
                wait = _wait;
                exec = _exec;

                app.AddThread(type, wait, exec);
            };

            thC.ShowDialog();
        }

        private void StartButton_Click(object sender, EventArgs e)
        {
            if(app.CanStart())
            {
                app.Start();
            }
        }

        private void PauseButton_Click(object sender, EventArgs e)
        {
            app.Pause();
        }

        private void FlushButton_Click(object sender, EventArgs e)
        {
            app.Flush();
            this.QueueFlowLayoutPanel.Refresh();
            this.QueueFlowLayoutPanel.Update();
            this.ThreadsFlowLayoutPanel.Refresh();
            this.ThreadsFlowLayoutPanel.Update();
        }

        private void ThreadsFlowLayoutPanel_ControlAdded(object sender, ControlEventArgs e)
        {
            if (this.ThreadsFlowLayoutPanel.Controls.Count >= 7)
            {
                this.ThreadsFlowLayoutPanel.Padding = new Padding(22, 0, 0, 0);
            }
        }
        private void ThreadsFlowLayoutPanel_ControlRemoved(object sender, ControlEventArgs e)
        {
            if (this.ThreadsFlowLayoutPanel.Controls.Count <= 6)
            {
                this.ThreadsFlowLayoutPanel.Padding = new Padding(28, 30, 0, 0);
            }
        }
        private void QueueFlowLayoutPanel_ControlAdded(object sender, ControlEventArgs e)
        {
            if (this.QueueFlowLayoutPanel.Controls.Count >= 24)
            {
                this.QueueFlowLayoutPanel.Padding = new Padding(15, 8, 0, 0);
            }
        }
        private void QueueFlowLayoutPanel_ControlRemoved(object sender, ControlEventArgs e)
        {
            if (this.QueueFlowLayoutPanel.Controls.Count <= 23)
            {
                this.QueueFlowLayoutPanel.Padding = new Padding(15, 15, 0, 0);
            }
        }
    }
}
