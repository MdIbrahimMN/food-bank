// Fetch events, donations, stories from backend and render them

document.addEventListener('DOMContentLoaded', () => {
    fetchEvents();
    fetchDonations();
    fetchStories();
});

async function fetchEvents() {
    const response = await fetch('http://localhost:5000/api/events');
    const events = await response.json();
    const eventSection = document.getElementById('events');
    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p><p>${event.description}</p>`;
        eventSection.appendChild(eventDiv);
    });
}

async function fetchDonations() {
    const response = await fetch('http://localhost:5000/api/donations');
    const donations = await response.json();
    const donationSection = document.getElementById('donations');
    donations.forEach(donation => {
        const donationDiv = document.createElement('div');
        donationDiv.innerHTML = `<p>${donation.donorName} - $${donation.amount}</p>`;
        donationSection.appendChild(donationDiv);
    });
}

async function fetchStories() {
    const response = await fetch('http://localhost:5000/api/stories');
    const stories = await response.json();
    const storySection = document.getElementById('stories');
    stories.forEach(story => {
        const storyDiv = document.createElement('div');
        storyDiv.innerHTML = `<h3>${story.title}</h3><p>${story.content}</p>`;
        storySection.appendChild(storyDiv);
    });
}
