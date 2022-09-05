using System.Windows.Forms;
using System.Collections.Generic;

namespace producer_consumer.PCQueue
{
    class TheQueue
    {
        #region Fields
        private Queue<QueueElement> virtualQue;
        private FlowLayoutPanel visualQue;
        #endregion

        #region Properties
        public int Count
        {
            get
            {
                return this.virtualQue.Count;
            }
        }
        #endregion

        #region Constructor
        public TheQueue(FlowLayoutPanel visualQue)
        {
            this.visualQue = visualQue;
            this.virtualQue = new Queue<QueueElement>();
        }
        #endregion

        #region Methods
        public QueueElement Enque(int value)
        {
            QueueElement element = new QueueElement(value);
            this.virtualQue.Enqueue(element);
            element.Attach(this.visualQue);

            return element;
        }
        public QueueElement Deque()
        {
            QueueElement element = this.virtualQue.Dequeue();
            element.Dettach(this.visualQue);

            return element;
        }
        public QueueElement Peek()
        {
            return this.virtualQue.Peek();
        }
        #endregion
    }
}
