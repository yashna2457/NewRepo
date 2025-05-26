<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Community Event Portal</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #333;
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: auto;
      padding: 20px;
    }

    header, footer {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      text-align: center;
      padding: 30px;
      border-radius: 15px;
      backdrop-filter: blur(10px);
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }

    nav {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      padding: 15px;
      margin: 20px 0;
    }

    nav ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      list-style: none;
    }

    nav a {
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 25px;
      transition: background 0.3s;
    }

    nav a:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #ffd700;
    }

    .section {
      background: rgba(255, 255, 255, 0.95);
      padding: 30px;
      margin-bottom: 30px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    h2 {
      text-align: center;
      margin-bottom: 25px;
    }

    .event-card {
      background: #f8f9fa;
      padding: 20px;
      margin-bottom: 20px;
      border-left: 4px solid #007bff;
      border-radius: 10px;
    }

    .event-card h3 {
      color: #007bff;
    }

    .event-price {
      font-weight: bold;
      color: #28a745;
    }

    .btn {
      background: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
      transition: background 0.3s;
    }

    .btn:hover {
      background: #0056b3;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .gallery-item {
      text-align: center;
      background: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .gallery img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.3s;
    }

    .gallery img:hover {
      transform: scale(1.05);
    }

    form .form-group {
      margin-bottom: 15px;
    }

    label {
      font-weight: bold;
    }

    input, select, textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .success-message {
      display: none;
      background: #d4edda;
      color: #155724;
      padding: 15px;
      margin-top: 20px;
      border-radius: 5px;
    }

    footer {
      margin-top: 40px;
      padding: 20px;
      color: white;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 1.8rem;
      }

      nav ul {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>Community Event Portal</h1>
    <p>Connecting our community through events and activities</p>
  </header>

  <nav>
    <ul>
      <li><a href="#events">Events</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#register">Register</a></li>
    </ul>
  </nav>

  <div class="container">

    <!-- Events Section -->
    <section class="section" id="events">
      <h2>Upcoming Events</h2>
      <div class="event-card">
        <h3>Summer Concert</h3>
        <p>Live music in the park with local bands.</p>
        <p class="event-price">Price: $25</p>
        <button class="btn">Register</button>
      </div>
      <div class="event-card">
        <h3>Food Festival</h3>
        <p>Enjoy dishes from local vendors and chefs.</p>
        <p class="event-price">Price: $15</p>
        <button class="btn">Get Tickets</button>
      </div>
      <div class="event-card">
        <h3>Art Workshop</h3>
        <p>Create art with local artists. All supplies included.</p>
        <p class="event-price">Price: $10</p>
        <button class="btn">Join</button>
      </div>
    </section>

    <!-- Gallery -->
    <section class="section" id="gallery">
      <h2>Event Photos</h2>
      <div class="gallery">
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=300&h=200&fit=crop" alt="Concert">
          <p>Summer Concert</p>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop" alt="Food Festival">
          <p>Food Festival</p>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop" alt="Art Workshop">
          <p>Art Workshop</p>
        </div>
      </div>
    </section>

    <!-- Registration Form -->
    <section class="section" id="register">
      <h2>Register for Events</h2>
      <form id="registrationForm">
        <div class="form-group">
          <label for="name">Full Name:</label>
          <input type="text" id="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="eventType">Choose Event:</label>
          <select id="eventType" required>
            <option value="">Select an event</option>
            <option value="concert">Summer Concert</option>
            <option value="festival">Food Festival</option>
            <option value="workshop">Art Workshop</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Additional Notes:</label>
          <textarea id="message" rows="4" placeholder="Any special requirements?"></textarea>
        </div>
        <button type="submit" class="btn">Register Now</button>
        <button type="button" class="btn" onclick="clearForm()">Clear</button>
      </form>
      <div id="successMessage" class="success-message">
        Thank you for registering! We'll contact you soon.
      </div>
    </section>

  </div>

  <footer>
    <p>&copy; 2025 Community Event Portal. All rights reserved.</p>
  </footer>

  <script>
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const eventType = document.getElementById('eventType').value;

      if (name && eventType) {
        document.getElementById('successMessage').style.display = 'block';
        this.reset();
      }
    });

    function clearForm() {
      document.getElementById('registrationForm').reset();
      document.getElementById('successMessage').style.display = 'none';
    }
  </script>
</body>
</html>
