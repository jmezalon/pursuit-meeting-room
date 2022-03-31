
m = Meeting.create(name: "Meeting Room 1", capacity: 6, floor: 22)
b = Meeting.create(name: "Boardroom 2", capacity: 12, floor: 21)
h = Meeting.create(name: "Hub", capacity: 30, floor: 22)


b1 = Booking.create(meeting_name: "Team Alpha - Scrum Standup", meeting_id: b.id, start_date: Time.strptime('04/04/2022 17:00', '%m/%d/%Y %H:%M'), end_date: Time.strptime('04/04/2022 17:30', '%m/%d/%Y %H:%M'))
b2 = Booking.create(meeting_name: "Project Eureka - Requirements Gathering", meeting_id: m.id, start_date: Time.strptime('04/05/2022 08:00', '%m/%d/%Y %H:%M'), end_date: Time.strptime('04/05/2022 08:45', '%m/%d/%Y %H:%M'))
b3 = Booking.create(meeting_name: "Star Team - Backlog Refinement", meeting_id: h.id, start_date: Time.strptime('04/04/2022 11:00', '%m/%d/%Y %H:%M'), end_date: Time.strptime('04/04/2022 12:00', '%m/%d/%Y %H:%M'))