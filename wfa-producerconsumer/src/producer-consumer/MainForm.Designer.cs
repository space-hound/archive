namespace producer_consumer
{
    partial class MainForm
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
            this.MainTableLayoutPanel = new System.Windows.Forms.TableLayoutPanel();
            this.MainSubTableLayoutPanel = new System.Windows.Forms.TableLayoutPanel();
            this.ThreadsFlowLayoutPanel = new System.Windows.Forms.FlowLayoutPanel();
            this.MenuTableLayoutPanel = new System.Windows.Forms.TableLayoutPanel();
            this.StartButtonLayoutPanel = new System.Windows.Forms.Panel();
            this.StartButton = new System.Windows.Forms.Button();
            this.FlushButtonLayoutPanel = new System.Windows.Forms.Panel();
            this.FlushButton = new System.Windows.Forms.Button();
            this.PauseButtonLayoutPanel = new System.Windows.Forms.Panel();
            this.PauseButton = new System.Windows.Forms.Button();
            this.AddThreadButtonLayoutPanel = new System.Windows.Forms.Panel();
            this.AddThreadButton = new System.Windows.Forms.Button();
            this.GeneralLogTextBox = new System.Windows.Forms.TextBox();
            this.QueueFlowLayoutPanel = new System.Windows.Forms.FlowLayoutPanel();
            this.MainTableLayoutPanel.SuspendLayout();
            this.MainSubTableLayoutPanel.SuspendLayout();
            this.MenuTableLayoutPanel.SuspendLayout();
            this.StartButtonLayoutPanel.SuspendLayout();
            this.FlushButtonLayoutPanel.SuspendLayout();
            this.PauseButtonLayoutPanel.SuspendLayout();
            this.AddThreadButtonLayoutPanel.SuspendLayout();
            this.SuspendLayout();
            // 
            // MainTableLayoutPanel
            // 
            this.MainTableLayoutPanel.ColumnCount = 1;
            this.MainTableLayoutPanel.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.MainTableLayoutPanel.Controls.Add(this.MainSubTableLayoutPanel, 0, 1);
            this.MainTableLayoutPanel.Controls.Add(this.QueueFlowLayoutPanel, 0, 0);
            this.MainTableLayoutPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MainTableLayoutPanel.Location = new System.Drawing.Point(0, 0);
            this.MainTableLayoutPanel.Margin = new System.Windows.Forms.Padding(0);
            this.MainTableLayoutPanel.Name = "MainTableLayoutPanel";
            this.MainTableLayoutPanel.RowCount = 2;
            this.MainTableLayoutPanel.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 15F));
            this.MainTableLayoutPanel.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 85F));
            this.MainTableLayoutPanel.Size = new System.Drawing.Size(1878, 759);
            this.MainTableLayoutPanel.TabIndex = 0;
            // 
            // MainSubTableLayoutPanel
            // 
            this.MainSubTableLayoutPanel.ColumnCount = 3;
            this.MainSubTableLayoutPanel.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 15F));
            this.MainSubTableLayoutPanel.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 55F));
            this.MainSubTableLayoutPanel.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 30F));
            this.MainSubTableLayoutPanel.Controls.Add(this.ThreadsFlowLayoutPanel, 1, 0);
            this.MainSubTableLayoutPanel.Controls.Add(this.MenuTableLayoutPanel, 0, 0);
            this.MainSubTableLayoutPanel.Controls.Add(this.GeneralLogTextBox, 2, 0);
            this.MainSubTableLayoutPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MainSubTableLayoutPanel.Location = new System.Drawing.Point(0, 113);
            this.MainSubTableLayoutPanel.Margin = new System.Windows.Forms.Padding(0);
            this.MainSubTableLayoutPanel.Name = "MainSubTableLayoutPanel";
            this.MainSubTableLayoutPanel.RowCount = 1;
            this.MainSubTableLayoutPanel.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.MainSubTableLayoutPanel.Size = new System.Drawing.Size(1878, 646);
            this.MainSubTableLayoutPanel.TabIndex = 0;
            // 
            // ThreadsFlowLayoutPanel
            // 
            this.ThreadsFlowLayoutPanel.AutoScroll = true;
            this.ThreadsFlowLayoutPanel.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(162)))), ((int)(((byte)(232)))));
            this.ThreadsFlowLayoutPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.ThreadsFlowLayoutPanel.Location = new System.Drawing.Point(281, 0);
            this.ThreadsFlowLayoutPanel.Margin = new System.Windows.Forms.Padding(0, 0, 4, 4);
            this.ThreadsFlowLayoutPanel.Name = "ThreadsFlowLayoutPanel";
            this.ThreadsFlowLayoutPanel.Padding = new System.Windows.Forms.Padding(28, 30, 0, 0);
            this.ThreadsFlowLayoutPanel.Size = new System.Drawing.Size(1028, 642);
            this.ThreadsFlowLayoutPanel.TabIndex = 1;
            this.ThreadsFlowLayoutPanel.ControlAdded += new System.Windows.Forms.ControlEventHandler(this.ThreadsFlowLayoutPanel_ControlAdded);
            this.ThreadsFlowLayoutPanel.ControlRemoved += new System.Windows.Forms.ControlEventHandler(this.ThreadsFlowLayoutPanel_ControlRemoved);
            // 
            // MenuTableLayoutPanel
            // 
            this.MenuTableLayoutPanel.BackColor = System.Drawing.Color.Crimson;
            this.MenuTableLayoutPanel.ColumnCount = 1;
            this.MenuTableLayoutPanel.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.MenuTableLayoutPanel.Controls.Add(this.StartButtonLayoutPanel, 0, 2);
            this.MenuTableLayoutPanel.Controls.Add(this.FlushButtonLayoutPanel, 0, 4);
            this.MenuTableLayoutPanel.Controls.Add(this.PauseButtonLayoutPanel, 0, 3);
            this.MenuTableLayoutPanel.Controls.Add(this.AddThreadButtonLayoutPanel, 0, 0);
            this.MenuTableLayoutPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MenuTableLayoutPanel.Location = new System.Drawing.Point(4, 0);
            this.MenuTableLayoutPanel.Margin = new System.Windows.Forms.Padding(4, 0, 4, 4);
            this.MenuTableLayoutPanel.Name = "MenuTableLayoutPanel";
            this.MenuTableLayoutPanel.RowCount = 5;
            this.MenuTableLayoutPanel.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.MenuTableLayoutPanel.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.MenuTableLayoutPanel.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.MenuTableLayoutPanel.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.MenuTableLayoutPanel.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.MenuTableLayoutPanel.Size = new System.Drawing.Size(273, 642);
            this.MenuTableLayoutPanel.TabIndex = 2;
            // 
            // StartButtonLayoutPanel
            // 
            this.StartButtonLayoutPanel.BackColor = System.Drawing.Color.Black;
            this.StartButtonLayoutPanel.Controls.Add(this.StartButton);
            this.StartButtonLayoutPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.StartButtonLayoutPanel.Location = new System.Drawing.Point(30, 296);
            this.StartButtonLayoutPanel.Margin = new System.Windows.Forms.Padding(30, 40, 30, 40);
            this.StartButtonLayoutPanel.Name = "StartButtonLayoutPanel";
            this.StartButtonLayoutPanel.Padding = new System.Windows.Forms.Padding(4);
            this.StartButtonLayoutPanel.Size = new System.Drawing.Size(213, 48);
            this.StartButtonLayoutPanel.TabIndex = 6;
            // 
            // StartButton
            // 
            this.StartButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(162)))), ((int)(((byte)(232)))));
            this.StartButton.Cursor = System.Windows.Forms.Cursors.Hand;
            this.StartButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.StartButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.StartButton.Font = new System.Drawing.Font("Consolas", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.StartButton.ForeColor = System.Drawing.Color.White;
            this.StartButton.Location = new System.Drawing.Point(4, 4);
            this.StartButton.Margin = new System.Windows.Forms.Padding(0);
            this.StartButton.Name = "StartButton";
            this.StartButton.Size = new System.Drawing.Size(205, 40);
            this.StartButton.TabIndex = 0;
            this.StartButton.Text = "Start";
            this.StartButton.UseVisualStyleBackColor = false;
            this.StartButton.Click += new System.EventHandler(this.StartButton_Click);
            // 
            // FlushButtonLayoutPanel
            // 
            this.FlushButtonLayoutPanel.BackColor = System.Drawing.Color.Black;
            this.FlushButtonLayoutPanel.Controls.Add(this.FlushButton);
            this.FlushButtonLayoutPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.FlushButtonLayoutPanel.Location = new System.Drawing.Point(30, 552);
            this.FlushButtonLayoutPanel.Margin = new System.Windows.Forms.Padding(30, 40, 30, 40);
            this.FlushButtonLayoutPanel.Name = "FlushButtonLayoutPanel";
            this.FlushButtonLayoutPanel.Padding = new System.Windows.Forms.Padding(4);
            this.FlushButtonLayoutPanel.Size = new System.Drawing.Size(213, 50);
            this.FlushButtonLayoutPanel.TabIndex = 4;
            // 
            // FlushButton
            // 
            this.FlushButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(162)))), ((int)(((byte)(232)))));
            this.FlushButton.Cursor = System.Windows.Forms.Cursors.Hand;
            this.FlushButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.FlushButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.FlushButton.Font = new System.Drawing.Font("Consolas", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FlushButton.ForeColor = System.Drawing.Color.White;
            this.FlushButton.Location = new System.Drawing.Point(4, 4);
            this.FlushButton.Margin = new System.Windows.Forms.Padding(0);
            this.FlushButton.Name = "FlushButton";
            this.FlushButton.Size = new System.Drawing.Size(205, 42);
            this.FlushButton.TabIndex = 0;
            this.FlushButton.Text = "Flush All";
            this.FlushButton.UseVisualStyleBackColor = false;
            this.FlushButton.Click += new System.EventHandler(this.FlushButton_Click);
            // 
            // PauseButtonLayoutPanel
            // 
            this.PauseButtonLayoutPanel.BackColor = System.Drawing.Color.Black;
            this.PauseButtonLayoutPanel.Controls.Add(this.PauseButton);
            this.PauseButtonLayoutPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.PauseButtonLayoutPanel.Location = new System.Drawing.Point(30, 424);
            this.PauseButtonLayoutPanel.Margin = new System.Windows.Forms.Padding(30, 40, 30, 40);
            this.PauseButtonLayoutPanel.Name = "PauseButtonLayoutPanel";
            this.PauseButtonLayoutPanel.Padding = new System.Windows.Forms.Padding(4);
            this.PauseButtonLayoutPanel.Size = new System.Drawing.Size(213, 48);
            this.PauseButtonLayoutPanel.TabIndex = 3;
            // 
            // PauseButton
            // 
            this.PauseButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(162)))), ((int)(((byte)(232)))));
            this.PauseButton.Cursor = System.Windows.Forms.Cursors.Hand;
            this.PauseButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.PauseButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.PauseButton.Font = new System.Drawing.Font("Consolas", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.PauseButton.ForeColor = System.Drawing.Color.White;
            this.PauseButton.Location = new System.Drawing.Point(4, 4);
            this.PauseButton.Margin = new System.Windows.Forms.Padding(0);
            this.PauseButton.Name = "PauseButton";
            this.PauseButton.Size = new System.Drawing.Size(205, 40);
            this.PauseButton.TabIndex = 0;
            this.PauseButton.Text = "Pause";
            this.PauseButton.UseVisualStyleBackColor = false;
            this.PauseButton.Click += new System.EventHandler(this.PauseButton_Click);
            // 
            // AddThreadButtonLayoutPanel
            // 
            this.AddThreadButtonLayoutPanel.BackColor = System.Drawing.Color.Black;
            this.AddThreadButtonLayoutPanel.Controls.Add(this.AddThreadButton);
            this.AddThreadButtonLayoutPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.AddThreadButtonLayoutPanel.Location = new System.Drawing.Point(30, 40);
            this.AddThreadButtonLayoutPanel.Margin = new System.Windows.Forms.Padding(30, 40, 30, 40);
            this.AddThreadButtonLayoutPanel.Name = "AddThreadButtonLayoutPanel";
            this.AddThreadButtonLayoutPanel.Padding = new System.Windows.Forms.Padding(4);
            this.AddThreadButtonLayoutPanel.Size = new System.Drawing.Size(213, 48);
            this.AddThreadButtonLayoutPanel.TabIndex = 0;
            // 
            // AddThreadButton
            // 
            this.AddThreadButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(162)))), ((int)(((byte)(232)))));
            this.AddThreadButton.Cursor = System.Windows.Forms.Cursors.Hand;
            this.AddThreadButton.Dock = System.Windows.Forms.DockStyle.Fill;
            this.AddThreadButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.AddThreadButton.Font = new System.Drawing.Font("Consolas", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.AddThreadButton.ForeColor = System.Drawing.Color.White;
            this.AddThreadButton.Location = new System.Drawing.Point(4, 4);
            this.AddThreadButton.Margin = new System.Windows.Forms.Padding(0);
            this.AddThreadButton.Name = "AddThreadButton";
            this.AddThreadButton.Size = new System.Drawing.Size(205, 40);
            this.AddThreadButton.TabIndex = 0;
            this.AddThreadButton.Text = "Add Thread";
            this.AddThreadButton.UseVisualStyleBackColor = false;
            this.AddThreadButton.Click += new System.EventHandler(this.AddThreadButton_Click);
            // 
            // GeneralLogTextBox
            // 
            this.GeneralLogTextBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this.GeneralLogTextBox.Font = new System.Drawing.Font("Consolas", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.GeneralLogTextBox.Location = new System.Drawing.Point(1313, 0);
            this.GeneralLogTextBox.Margin = new System.Windows.Forms.Padding(0, 0, 3, 3);
            this.GeneralLogTextBox.Multiline = true;
            this.GeneralLogTextBox.Name = "GeneralLogTextBox";
            this.GeneralLogTextBox.ReadOnly = true;
            this.GeneralLogTextBox.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.GeneralLogTextBox.Size = new System.Drawing.Size(562, 643);
            this.GeneralLogTextBox.TabIndex = 3;
            // 
            // QueueFlowLayoutPanel
            // 
            this.QueueFlowLayoutPanel.AutoScroll = true;
            this.QueueFlowLayoutPanel.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(163)))), ((int)(((byte)(73)))), ((int)(((byte)(164)))));
            this.QueueFlowLayoutPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.QueueFlowLayoutPanel.FlowDirection = System.Windows.Forms.FlowDirection.TopDown;
            this.QueueFlowLayoutPanel.Location = new System.Drawing.Point(4, 4);
            this.QueueFlowLayoutPanel.Margin = new System.Windows.Forms.Padding(4);
            this.QueueFlowLayoutPanel.Name = "QueueFlowLayoutPanel";
            this.QueueFlowLayoutPanel.Padding = new System.Windows.Forms.Padding(15, 15, 0, 0);
            this.QueueFlowLayoutPanel.Size = new System.Drawing.Size(1870, 105);
            this.QueueFlowLayoutPanel.TabIndex = 1;
            this.QueueFlowLayoutPanel.ControlAdded += new System.Windows.Forms.ControlEventHandler(this.QueueFlowLayoutPanel_ControlAdded);
            this.QueueFlowLayoutPanel.ControlRemoved += new System.Windows.Forms.ControlEventHandler(this.QueueFlowLayoutPanel_ControlRemoved);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Black;
            this.ClientSize = new System.Drawing.Size(1878, 759);
            this.Controls.Add(this.MainTableLayoutPanel);
            this.DoubleBuffered = true;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "MainForm";
            this.Text = "Producer Consumer Problem";
            this.Load += new System.EventHandler(this.MainForm_Load);
            this.MainTableLayoutPanel.ResumeLayout(false);
            this.MainSubTableLayoutPanel.ResumeLayout(false);
            this.MainSubTableLayoutPanel.PerformLayout();
            this.MenuTableLayoutPanel.ResumeLayout(false);
            this.StartButtonLayoutPanel.ResumeLayout(false);
            this.FlushButtonLayoutPanel.ResumeLayout(false);
            this.PauseButtonLayoutPanel.ResumeLayout(false);
            this.AddThreadButtonLayoutPanel.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TableLayoutPanel MainTableLayoutPanel;
        private System.Windows.Forms.TableLayoutPanel MainSubTableLayoutPanel;
        private System.Windows.Forms.FlowLayoutPanel QueueFlowLayoutPanel;
        private System.Windows.Forms.FlowLayoutPanel ThreadsFlowLayoutPanel;
        private System.Windows.Forms.TableLayoutPanel MenuTableLayoutPanel;
        private System.Windows.Forms.Panel AddThreadButtonLayoutPanel;
        private System.Windows.Forms.Button AddThreadButton;
        private System.Windows.Forms.Panel StartButtonLayoutPanel;
        private System.Windows.Forms.Button StartButton;
        private System.Windows.Forms.Panel FlushButtonLayoutPanel;
        private System.Windows.Forms.Button FlushButton;
        private System.Windows.Forms.Panel PauseButtonLayoutPanel;
        private System.Windows.Forms.Button PauseButton;
        private System.Windows.Forms.TextBox GeneralLogTextBox;
    }
}

