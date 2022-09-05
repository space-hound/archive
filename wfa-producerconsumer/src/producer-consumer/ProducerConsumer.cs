using System;
using System.Threading;
using System.Windows.Forms;
using System.Collections.Generic;

using producer_consumer.PCQueue;
using producer_consumer.PCThread;

namespace producer_consumer
{
    class ProducerConsumer
    {
        static Random rnd = new Random();

        TheQueue que;

        List<TheThread> producersV;
        List<Thread> producers;

        List<TheThread> consumersV;
        List<Thread> consumers;

        private bool paused = true;

        MainForm Main;
        FlowLayoutPanel QueContainer;
        FlowLayoutPanel ThreadContainer;
        TextBox LogContainer;


        public ProducerConsumer(MainForm Main, FlowLayoutPanel QueContainer, FlowLayoutPanel ThreadContainer, TextBox LogContainer)
        {
            this.Main = Main;

            this.QueContainer = QueContainer;
            this.que = new TheQueue(this.QueContainer);

            this.ThreadContainer = ThreadContainer;
            this.LogContainer = LogContainer;

            this.producersV = new List<TheThread>();
            this.producers = new List<Thread>();
            this.consumersV = new List<TheThread>();
            this.consumers = new List<Thread>();
        }

        public void AddThread(int type, int[] wait, int[] execute)
        {
            TheThread thV = new TheThread(type, wait, execute);
            Thread th;

            if(type == 0)
            {
                th = new Thread(Produce);
                th.IsBackground = true;
                th.Name = producers.Count.ToString();
                producers.Add(th);
                producersV.Add(thV);
                thV.Attach(this.ThreadContainer);
                th.Start();
            }
            else
            {
                th = new Thread(Consume);
                th.Name = consumers.Count.ToString();
                th.IsBackground = true;
                consumers.Add(th);
                consumersV.Add(thV);
                thV.Attach(this.ThreadContainer);
                th.Start();
            }
        }
        public void Pause()
        {
            this.paused = true;
        }
        public void Start()
        {
            this.paused = false;
        }

        private void Produce()
        {
            while(true)
            {
                if(!paused)
                {
                    int thread = int.Parse(Thread.CurrentThread.Name);
                    int wait = this.producersV[thread].WaitTime();

                    this.Main.BeginInvoke((Action)(() => {

                        int value = rnd.Next(0, 256);

                        DateTime now = DateTime.Now;

                        QueueElement element = this.que.Enque(value);

                        this.producersV[thread].CurrentAction(value, wait, now);
                        this.ProduceLog(thread, value, now);

                    }));

                    Thread.Sleep(wait);
                }
            }
        }

        private void ProduceLog(int thread, int value, DateTime date)
        {
            this.LogContainer.Text += "Producer #" + thread.ToString() + " has produced " + value.ToString() + " at " + date.ToString("HH:mm:ss") + " ! \r\n";
        }

        private void Consume()
        {
            while (true)
            {
                if (!paused)
                {
                    lock (this.que)
                    {
                        int thread = int.Parse(Thread.CurrentThread.Name);
                        int wait = this.consumersV[thread].WaitTime();

                        if(this.que.Count > 0)
                        {
                            DateTime now = DateTime.Now;

                            QueueElement element = this.que.Deque();

                            this.consumersV[thread].CurrentAction(element.Value, wait, now);

                            this.ConsumeLog(thread, element.Value, now);
                        }
                        else
                        {
                            DateTime now = DateTime.Now;
                            this.EmptyLog(thread, now);
                        }

                        Thread.Sleep(wait);
                    }
                }
            }
        }

        private void ConsumeLog(int thread, int value, DateTime date)
        {
            this.LogContainer.Text += "Consumer #" + thread.ToString() + " has consumed " + value.ToString() + " at " + date.ToString("HH:mm:ss") + " !\r\n";
        }

        private void EmptyLog(int thread, DateTime date)
        {
            this.LogContainer.Text += "Consumer #" + thread.ToString() + " has tried to consume at " + date.ToString("HH:mm:ss") + " but queue empty!\r\n";
        }

        public void Flush()
        {
            this.paused = true;

            foreach(Thread t in producers)
            {
                t.Abort();
            }

            foreach (Thread t in consumers)
            {
                t.Abort();
            }

            while (this.QueContainer.Controls.Count > 0)
            {
                this.QueContainer.Controls.RemoveAt(0);
            }

            while (this.ThreadContainer.Controls.Count > 0)
            {
                this.ThreadContainer.Controls.RemoveAt(0);
            }

            //foreach (TheThread t in producersV)
            //{
            //    t.Dettach(this.ThreadContainer);
            //}

            //foreach (TheThread t in consumersV)
            //{
            //    t.Dettach(this.ThreadContainer);
            //}

            //while(que.Count > 0)
            //{
            //    que.Deque();
            //}

            this.que = new TheQueue(this.QueContainer);

            this.producersV = new List<TheThread>();
            this.producers = new List<Thread>();
            this.consumersV = new List<TheThread>();
            this.consumers = new List<Thread>();

            this.LogContainer.Text = "";
        }

        public bool CanStart()
        {
            return this.producers.Count > 0 && this.consumers.Count > 0;
        }
    }
}
