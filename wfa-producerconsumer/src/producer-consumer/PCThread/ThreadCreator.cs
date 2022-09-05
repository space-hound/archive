using System;
using System.Drawing;
using System.Windows.Forms;

namespace producer_consumer.PCThread
{
    public partial class ThreadCreator : Form
    {
        public event Action<int, int[], int[]> Callback;

        public ThreadCreator()
        {
            InitializeComponent();

        }

        private void ThreadCreator_Load(object sender, EventArgs e)
        {

        }

        private void ProducerCheckbox_CheckedChanged(object sender, EventArgs e)
        {
            if(this.ProducerCheckbox.Checked)
            {
                this.MainContainer.BackColor = Color.FromArgb(0, 160, 62);
            }
        }

        private void ConsumerCheckbox_CheckedChanged(object sender, EventArgs e)
        {
            if (this.ConsumerCheckbox.Checked)
            {
                this.MainContainer.BackColor = Color.FromArgb(253, 95, 0);
            }
        }

        private void DiscardButton_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void SaveButton_Click(object sender, EventArgs e)
        {
            int type;

            if (this.ProducerCheckbox.Checked)
            {
                type = 0;
            }
            else
            {
                type = 1;
            }

            int[] wait;

            if (textBox2.Text != "")
            {
                wait = new int[] { int.Parse(this.textBox1.Text), int.Parse(this.textBox2.Text) };
            }
            else
            {
                wait = new int[] { int.Parse(this.textBox1.Text) };
            }

            int[] exec;

            if (textBox4.Text != "")
            {
                exec = new int[] { int.Parse(this.textBox3.Text), int.Parse(this.textBox4.Text) };
            }
            else
            {
                exec = new int[] { int.Parse(this.textBox3.Text) };
            }

            Callback(type, wait, exec );

            this.Close();
        }
    }
}
