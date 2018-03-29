// var Vue = require('vue');

new Vue({
  
  el: '#events',

  data: {

    default: { title: '', detail: '', date: '', time: '', showDetails: false},
    editing: false,
    selectedEvent: null,
    event: { title: '', detail: '', date: '', time: '', showDetails: false},
    events: [{

      title: 'The Martian',
      detail: 'Screening of The Martian featuring Matt Damon as Mark Watney, the protagonist. ',
      time: '4:00',
      date: '2015-02-02',
      showDetails: false

    },
    {

      title: 'Logans 115th Birthday',
      detail: 'Wolverines Birthday Party before, you know, he dies in "Logan"',
      time: '5:00',
      date: '2016-09-09',
      showDetails: false

    }]
  },

  methods: {

    addEvent: function () {

      if (this.event.title.trim()) {
        
            this.events.push(this.event);
            $.notiny({ text: 'Your new event has been added.' });
            this.event = { title: '', detail: '', date: '', time: '', showDetails: false };
            
          }

    },
    
    deleteEvent: function (selectedEvent) {

      if (confirm('Are you sure you want to delete this item?')) {
        
            this.events.splice(this.events.indexOf(selectedEvent), 1);  

          }

          this.selectedEvent = null;
          $.notiny({ text: 'Event has been deleted.' });
          this.selectedEvent = { title: '', detail: '', date: '', time: '', showDetails: false};

    },

    changeDate: function (event) {

      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var today  = new Date(event.date);

      return today.toLocaleDateString("en-US",options);

    },

    editEvent: function (selectedEvent) {

      this.event = this.selectedEvent;
      this.editing = true;

    },

    saveChanges: function () {

      $.notiny({ text: 'Your changes have been saved.' });
      this.editing = false;
      this.event = { title: '', detail: '', date: '', time: '', showDetails: false};

    },

    viewEventDetails: function (index) {

      this.selectedEvent = this.events[index];
      
      $('.ui.sidebar').sidebar('toggle');

    },

    signUp: function () {


      $('.small.modal').modal('show');
      
    }
  }
});

