USE EventPortal;
SELECT u.full_name, e.title, e.city, e.start_date
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
JOIN Events e ON r.event_id = e.event_id
WHERE e.status = 'upcoming' AND u.city = e.city
ORDER BY e.start_date;

SELECT e.title, AVG(f.rating) AS avg_rating, COUNT(f.feedback_id) AS total_feedbacks
FROM Events e
JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.event_id
HAVING COUNT(f.feedback_id) >= 10
ORDER BY avg_rating DESC;

SELECT *FROM Users
WHERE user_id NOT IN (
    SELECT user_id FROM Registrations
    WHERE registration_date >= CURDATE() - INTERVAL 90 DAY
);

SELECT event_id, COUNT(*) AS session_count
FROM Sessions
WHERE TIME(start_time) BETWEEN '10:00:00' AND '11:59:59'
GROUP BY event_id;

SELECT u.city, COUNT(DISTINCT r.user_id) AS total_users
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY total_users DESC
LIMIT 5;

SELECT event_id,
    SUM(resource_type = 'pdf') AS pdfs,
    SUM(resource_type = 'image') AS images,
    SUM(resource_type = 'link') AS links
FROM Resources
GROUP BY event_id;

SELECT u.full_name, e.title AS event_name, f.rating, f.comments
FROM Feedback f
JOIN Users u ON f.user_id = u.user_id
JOIN Events e ON f.event_id = e.event_id
WHERE f.rating < 3;

SELECT e.title, COUNT(s.session_id) AS session_count
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id;

SELECT u.full_name AS organizer, e.status, COUNT(e.event_id) AS event_count
FROM Events e
JOIN Users u ON e.organizer_id = u.user_id
GROUP BY e.organizer_id, e.status;

SELECT DISTINCT e.title
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
WHERE e.event_id NOT IN (
    SELECT DISTINCT event_id FROM Feedback
);

SELECT registration_date, COUNT(*) AS new_users
FROM Users
WHERE registration_date >= CURDATE() - INTERVAL 7 DAY
GROUP BY registration_date;

SELECT e.title, COUNT(s.session_id) AS session_count
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id
ORDER BY session_count DESC
LIMIT 1;

SELECT e.city, AVG(f.rating) AS avg_rating
FROM Events e
JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.city;

SELECT e.title, COUNT(r.user_id) AS total_registrations
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
GROUP BY e.event_id
ORDER BY total_registrations DESC
LIMIT 3;

SELECT s1.event_id, s1.title AS session1, s2.title AS session2
FROM Sessions s1
JOIN Sessions s2 ON s1.event_id = s2.event_id
AND s1.session_id <> s2.session_id
AND s1.start_time < s2.end_time
AND s1.end_time > s2.start_time;

SELECT *
FROM Users
WHERE registration_date >= CURDATE() - INTERVAL 30 DAY
AND user_id NOT IN (
    SELECT DISTINCT user_id FROM Registrations
);

SELECT speaker_name, COUNT(*) AS session_count
FROM Sessions
GROUP BY speaker_name
HAVING COUNT(*) > 1;

SELECT title
FROM Events
WHERE event_id NOT IN (
    SELECT DISTINCT event_id FROM Resources
);

SELECT e.title, COUNT(DISTINCT r.user_id) AS total_registrations, AVG(f.rating) AS avg_rating
FROM Events e
LEFT JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON e.event_id = f.event_id
WHERE e.status = 'completed'
GROUP BY e.event_id;

SELECT u.full_name,
    COUNT(DISTINCT r.event_id) AS events_attended,
    COUNT(DISTINCT f.feedback_id) AS feedbacks_given
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
LEFT JOIN Feedback f ON u.user_id = f.user_id
GROUP BY u.user_id;

SELECT u.full_name, COUNT(f.feedback_id) AS feedback_count
FROM Users u
JOIN Feedback f ON u.user_id = f.user_id
GROUP BY u.user_id
ORDER BY feedback_count DESC
LIMIT 5;

SELECT user_id, event_id, COUNT(*) AS reg_count
FROM Registrations
GROUP BY user_id, event_id
HAVING reg_count > 1;

SELECT DATE_FORMAT(registration_date, '%Y-%m') AS month, COUNT(*) AS registrations
FROM Registrations
WHERE registration_date >= CURDATE() - INTERVAL 12 MONTH
GROUP BY month
ORDER BY month;

SELECT event_id, AVG(TIMESTAMPDIFF(MINUTE, start_time, end_time)) AS avg_duration_minutes
FROM Sessions
GROUP BY event_id;

SELECT e.title
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE s.session_id IS NULL;

