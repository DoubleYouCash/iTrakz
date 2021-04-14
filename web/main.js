const database = require('../sqlite/db.js');
let db = new database(); // Starts the database connection for the handlers to use

const el = document.getElementById('ticketForm');

function fetchTickets() {
    const tickets = db.getOpenTickets();
    const ticketsList = document.getElementById('ticketList');

    if (tickets.length < 1) {
        return; //TODO: Add HTML here for the case that there are no open tickets
    }

    ticketsList.innerHTML = '';
    for (let i = 0; i < tickets.length; i++) {
        const author = tickets[i].author;
        const title = tickets[i].title;
        const description = tickets[i].description;
        const label = tickets[i].label;
        const assignedTo = tickets[i].responder;

        ticketsList.innerHTML += '<div class="row ticket-indiv">' +
                                 '<div class="col-2">' + author + '</div>' +
                                 '<div class="col-1">1</div>' +
                                 '<div class="col-2">' + title + '</div>' +
                                 '<div class="col-3">' + description +'</div>' +
                                 '<div class="col-1">' + label + '</div>' +
                                 '<div class="col-2">' + assignedTo +'</div>' +
                                 '</div>';
    }

}

function fetchHistory() {
    const history = db.getHistory();

    const historyList = document.getElementById('historyList');

    historyList.innerHTML = '';
    for (let i = 0; i < history.length; i++) {
        const date = history[i].date;
        const description = history[i].description;
        const user = history[i].user;

        //DONE
        historyList += '<div class="row">' +
                        '<div class="col-2 date">' +
                        '<p>' + date + '</p>' + '</div>' +
                        '<div class="col hist-description">' +
                        '<p>' + description + '</p>' + '</div>' +
                        '<div class="col-1 user">' +
                        '<p>' + user + '</p>' + '</div>' +
                        '<hr />' + '</div>';
    }


}

function getTotals() {
    const newTickets = db.checkNewOpenTickets();
    const inProgressTickets = db.checkInProgressTickets();

    //Done I think
    const openTickets = document.getElementById("new-open-tickets");
    openTickets = newTickets; 

    const ipTickets = document.getElementById("ip-tickets");
    ipTickets = inProgressTickets;
}

//For Dashboard Ticket List, I think is correct if the main ticket list is correct as well
function dashboardTicketList() {
    const dashtickets = db.getOpenTickets();

    const dashTickList = document.getElementById('tickList');

    dashTickList.innerHTML = '';

    for(let i = 0; i < 3; i++) {
        const mainTitle = dashtickets[i].title;
        const dashdescription = dashtickets[i].description;

        dashTickList += '<p class="main-title">' + mainTitle + '</p>' +
                        '<p class="description">' + dashdescription + '</p>' +
                        '<hr />';
    }
}