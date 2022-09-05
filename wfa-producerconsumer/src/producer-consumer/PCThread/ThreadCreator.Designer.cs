namespace producer_consumer.PCThread
{
    partial class ThreadCreator
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.MainContainer = new System.Windows.Forms.TableLayoutPanel();
            this.tableLayoutPanel2 = new System.Windows.Forms.TableLayoutPanel();
            this.panel3 = new System.Windows.Forms.Panel();
            this.textBox3 = new System.Windows.Forms.TextBox();
            this.textBox4 = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.panel2 = new System.Windows.Forms.Panel();
            this.textBox2 = new System.Windows.Forms.TextBox();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.ConsumerCheckbox = new System.Windows.Forms.RadioButton();
            this.ProducerCheckbox = new System.Windows.Forms.RadioButton();
            this.panel4 = new System.Windows.Forms.Panel();
            this.SaveButton = new System.Windows.Forms.Button();
            this.DiscardButton = new System.Windows.Forms.Button();
            this.MainContainer.SuspendLayout();
            this.tableLayoutPanel2.SuspendLayout();
            this.panel3.SuspendLayout();
            this.panel2.SuspendLayout();
            this.panel1.SuspendLayout();
            this.panel4.SuspendLayout();
            this.SuspendLayout();
            // 
            // MainContainer
            // 
            this.MainContainer.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(160)))), ((int)(((byte)(62)))));
            this.MainContainer.ColumnCount = 3;
            this.MainContainer.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 10F));
            this.MainContainer.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 80F));
            this.MainContainer.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 10F));
            this.MainContainer.Controls.Add(this.tableLayoutPanel2, 1, 0);
            this.MainContainer.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MainContainer.Location = new System.Drawing.Point(4, 4);
            this.MainContainer.Margin = new System.Windows.Forms.Padding(0);
            this.MainContainer.Name = "MainContainer";
            this.MainContainer.RowCount = 1;
            this.MainContainer.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.MainContainer.Size = new System.Drawing.Size(427, 639);
            this.MainContainer.TabIndex = 0;
            // 
            // tableLayoutPanel2
            // 
            this.tableLayoutPanel2.ColumnCount = 1;
            this.tableLayoutPanel2.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel2.Controls.Add(this.panel3, 0, 2);
            this.tableLayoutPanel2.Controls.Add(this.panel2, 0, 1);
            this.tableLayoutPanel2.Controls.Add(this.panel1, 0, 0);
            this.tableLayoutPanel2.Controls.Add(this.panel4, 0, 3);
            this.tableLayoutPanel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel2.Location = new System.Drawing.Point(45, 3);
            this.tableLayoutPanel2.Name = "tableLayoutPanel2";
            this.tableLayoutPanel2.RowCount = 4;
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 25F));
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tableLayoutPanel2.Size = new System.Drawing.Size(335, 633);
            this.tableLayoutPanel2.TabIndex = 0;
            // 
            // panel3
            // 
            this.panel3.Controls.Add(this.textBox3);
            this.panel3.Controls.Add(this.textBox4);
            this.panel3.Controls.Add(this.label3);
            this.panel3.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel3.Location = new System.Drawing.Point(3, 319);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(329, 152);
            this.panel3.TabIndex = 2;
            // 
            // textBox3
            // 
            this.textBox3.Font = new System.Drawing.Font("Consolas", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox3.Location = new System.Drawing.Point(35, 72);
            this.textBox3.Name = "textBox3";
            this.textBox3.Size = new System.Drawing.Size(100, 30);
            this.textBox3.TabIndex = 7;
            this.textBox3.Text = "200";
            // 
            // textBox4
            // 
            this.textBox4.Font = new System.Drawing.Font("Consolas", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox4.Location = new System.Drawing.Point(199, 72);
            this.textBox4.Name = "textBox4";
            this.textBox4.Size = new System.Drawing.Size(100, 30);
            this.textBox4.TabIndex = 6;
            this.textBox4.Text = "400";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Consolas", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.ForeColor = System.Drawing.Color.White;
            this.label3.Location = new System.Drawing.Point(57, 17);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(220, 28);
            this.label3.TabIndex = 3;
            this.label3.Text = "Processing Time:";
            // 
            // panel2
            // 
            this.panel2.Controls.Add(this.textBox2);
            this.panel2.Controls.Add(this.textBox1);
            this.panel2.Controls.Add(this.label2);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel2.Location = new System.Drawing.Point(3, 161);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(329, 152);
            this.panel2.TabIndex = 1;
            // 
            // textBox2
            // 
            this.textBox2.Font = new System.Drawing.Font("Consolas", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox2.Location = new System.Drawing.Point(199, 83);
            this.textBox2.Name = "textBox2";
            this.textBox2.Size = new System.Drawing.Size(100, 30);
            this.textBox2.TabIndex = 5;
            this.textBox2.Text = "400";
            // 
            // textBox1
            // 
            this.textBox1.Font = new System.Drawing.Font("Consolas", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox1.Location = new System.Drawing.Point(35, 83);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(100, 30);
            this.textBox1.TabIndex = 4;
            this.textBox1.Text = "200";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Consolas", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.Color.White;
            this.label2.Location = new System.Drawing.Point(30, 23);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(259, 28);
            this.label2.TabIndex = 3;
            this.label2.Text = "Executing Interval:";
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.label1);
            this.panel1.Controls.Add(this.ConsumerCheckbox);
            this.panel1.Controls.Add(this.ProducerCheckbox);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(3, 3);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(329, 152);
            this.panel1.TabIndex = 0;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Consolas", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.Color.White;
            this.label1.Location = new System.Drawing.Point(57, 11);
            this.label1.Margin = new System.Windows.Forms.Padding(3, 0, 3, 30);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(207, 28);
            this.label1.TabIndex = 2;
            this.label1.Text = "Type of thread:";
            // 
            // ConsumerCheckbox
            // 
            this.ConsumerCheckbox.AutoSize = true;
            this.ConsumerCheckbox.Font = new System.Drawing.Font("Consolas", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ConsumerCheckbox.ForeColor = System.Drawing.Color.White;
            this.ConsumerCheckbox.Location = new System.Drawing.Point(95, 117);
            this.ConsumerCheckbox.Name = "ConsumerCheckbox";
            this.ConsumerCheckbox.Size = new System.Drawing.Size(124, 28);
            this.ConsumerCheckbox.TabIndex = 1;
            this.ConsumerCheckbox.TabStop = true;
            this.ConsumerCheckbox.Text = "Consumer";
            this.ConsumerCheckbox.UseVisualStyleBackColor = true;
            this.ConsumerCheckbox.CheckedChanged += new System.EventHandler(this.ConsumerCheckbox_CheckedChanged);
            // 
            // ProducerCheckbox
            // 
            this.ProducerCheckbox.AutoSize = true;
            this.ProducerCheckbox.Font = new System.Drawing.Font("Consolas", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ProducerCheckbox.ForeColor = System.Drawing.Color.White;
            this.ProducerCheckbox.Location = new System.Drawing.Point(95, 72);
            this.ProducerCheckbox.Name = "ProducerCheckbox";
            this.ProducerCheckbox.Size = new System.Drawing.Size(124, 28);
            this.ProducerCheckbox.TabIndex = 0;
            this.ProducerCheckbox.TabStop = true;
            this.ProducerCheckbox.Text = "Producer";
            this.ProducerCheckbox.UseVisualStyleBackColor = true;
            this.ProducerCheckbox.CheckedChanged += new System.EventHandler(this.ProducerCheckbox_CheckedChanged);
            // 
            // panel4
            // 
            this.panel4.Controls.Add(this.SaveButton);
            this.panel4.Controls.Add(this.DiscardButton);
            this.panel4.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel4.Location = new System.Drawing.Point(3, 477);
            this.panel4.Name = "panel4";
            this.panel4.Size = new System.Drawing.Size(329, 153);
            this.panel4.TabIndex = 3;
            // 
            // SaveButton
            // 
            this.SaveButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(162)))), ((int)(((byte)(232)))));
            this.SaveButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.SaveButton.Font = new System.Drawing.Font("Consolas", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.SaveButton.ForeColor = System.Drawing.Color.White;
            this.SaveButton.Location = new System.Drawing.Point(26, 72);
            this.SaveButton.Name = "SaveButton";
            this.SaveButton.Size = new System.Drawing.Size(124, 64);
            this.SaveButton.TabIndex = 2;
            this.SaveButton.Text = "Save";
            this.SaveButton.UseVisualStyleBackColor = false;
            this.SaveButton.Click += new System.EventHandler(this.SaveButton_Click);
            // 
            // DiscardButton
            // 
            this.DiscardButton.BackColor = System.Drawing.Color.Crimson;
            this.DiscardButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.DiscardButton.Font = new System.Drawing.Font("Consolas", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.DiscardButton.ForeColor = System.Drawing.Color.White;
            this.DiscardButton.Location = new System.Drawing.Point(175, 72);
            this.DiscardButton.Name = "DiscardButton";
            this.DiscardButton.Size = new System.Drawing.Size(124, 64);
            this.DiscardButton.TabIndex = 1;
            this.DiscardButton.Text = "Discard";
            this.DiscardButton.UseVisualStyleBackColor = false;
            this.DiscardButton.Click += new System.EventHandler(this.DiscardButton_Click);
            // 
            // ThreadCreator
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Black;
            this.ClientSize = new System.Drawing.Size(435, 647);
            this.Controls.Add(this.MainContainer);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "ThreadCreator";
            this.Padding = new System.Windows.Forms.Padding(4);
            this.Text = "Create Thread";
            this.Load += new System.EventHandler(this.ThreadCreator_Load);
            this.MainContainer.ResumeLayout(false);
            this.tableLayoutPanel2.ResumeLayout(false);
            this.panel3.ResumeLayout(false);
            this.panel3.PerformLayout();
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.panel4.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TableLayoutPanel MainContainer;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel2;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.RadioButton ConsumerCheckbox;
        private System.Windows.Forms.RadioButton ProducerCheckbox;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox textBox3;
        private System.Windows.Forms.TextBox textBox4;
        private System.Windows.Forms.TextBox textBox2;
        private System.Windows.Forms.Panel panel4;
        private System.Windows.Forms.Button SaveButton;
        private System.Windows.Forms.Button DiscardButton;
    }
}