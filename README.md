# 🚀 Madadgar: Empowering Disaster Response


[Wire Frames](https://www.figma.com/file/vEia4g9lEtuCwus9bboVys/MADADGAR-WIREFRAMES?type=design&node-id=151%3A0&mode=design&t=GYxbACcWXHna4CgQ-1)
![Madadgar Logo](insert_logo_url_here)

Madadgar is a revolutionary mobile-first progressive web application that puts the power of disaster response in your hands. With just a few taps, you can become a crucial part of the first line of defense in times of disasters like earthquakes, tsunamis, and floods. 

Join us in making a difference when it matters most! 🌍

## 📖 Table of Contents
- [Setup and Run Project](#setup-and-run-project)
- [Introduction](#introduction)
- [User Demographic](#user-demographic)
- [Key Features](#key-features)
- [Why Madadgar?](#why-madadgar)
- [How Does It Work?](#how-does-it-work)
- [API Contracts](#api-contracts)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Setup and Run Project

- Visit [Wire Frames](https://www.figma.com/file/vEia4g9lEtuCwus9bboVys/MADADGAR-WIREFRAMES?type=design&node-id=151%3A0&mode=design&t=GYxbACcWXHna4CgQ-1) to view our frontend
- git clone the repositry
- docker build -f Dockerfile.backend -t backendimage . 
- docker run backendimage

## 🌟 Introduction

Madadgar is not just another app; it's a game-changer in disaster response. Our mission is to empower individuals and organizations to report disasters swiftly, coordinate resources efficiently, and ensure transparency in relief efforts. Together, we can save lives and make the world a safer place.

## 🙋‍♂️ User Demographic

Madadgar is designed for a diverse range of users who share a common interest in disaster reporting, relief, and humanitarian efforts. Our users include:

- The General Public: Whether you're a resident of a disaster-prone area or a traveler witnessing a crisis, Madadgar empowers you to contribute to relief efforts.
- Volunteers: Compassionate individuals, local NGOs, and international relief agencies can lend their time, skills, and resources.
- First Responders: Firefighters, medical personnel, and emergency services can coordinate resources and respond promptly.
- Government Agencies: Disaster management and relief agencies can enhance coordination and share critical information.
- Tech-Savvy Users: If you're comfortable with digital platforms, Madadgar offers an intuitive and user-friendly experience.
- Community Leaders: Organize local resources and respond effectively within your community.
- Humanitarian Organizations: Streamline your relief efforts to ensure aid reaches affected areas promptly.
- Researchers and Analysts: Access real-time data and insights for studying disaster trends and response mechanisms.

## 🔑 Key Features

### 🌐 Immediate Reporting
- Report disasters in real-time using your mobile device.
- Swiftly share critical information to enable faster response times.

### 🤝 Crowdsourced Validation
- Validate disaster claims through crowdsourcing within a defined geographical radius.
- Engage nearby users and organizations to assess the situation's accuracy and reliability.

### 📊 Resource Pledging and Tracking
- Prevent over- and under-allocation of relief resources.
- Facilitate transparent and coordinated resource commitments to maximize efficiency.

### 📈 Transparency and Accountability
- Maintain a meticulous audit trail to ensure accountability and transparency.
- Track the progress of your reports and see how resources are allocated.

### 🌟 User Engagement and Empowerment
- Empower individuals to actively participate in disaster response efforts.
- Foster a sense of community engagement and responsibility.

## 🤔 Why Madadgar?

Madadgar complements existing government helplines and NGO contacts for several reasons:

- Immediate Reporting: Report disasters and critical information immediately using your mobile device.
- Crowdsourced Data: Aggregates data from multiple sources for a comprehensive, real-time view of the situation.
- Transparency and Accountability: Offers transparency in the disaster response process, reducing the risk of mismanagement.
- Resource Coordination: Facilitates resource coordination among NGOs, volunteer organizations, and first responders.
- Efficiency and Avoiding Redundancy: Centralizes disaster reporting and response coordination to avoid duplication of efforts.
- User Engagement and Empowerment: Empowers individuals to actively participate in disaster response efforts.
- Data for Preparedness: Supports disaster preparedness by identifying high-risk areas.

## 🌐 How Does It Work?

### Crowd-Sourcing to Validate Disaster Claims
1. User reports a disaster claim, providing details and their location.
2. A predefined geographical radius is established around the user's location.
3. Nearby users and organizations are notified and requested to validate the information.
4. Validation relies on collective input from users and organizations within the radius.
5. Madadgar calculates a confidence score based on validation results, updating the claim status.

### Resource Pledging and Tracking
1. NGOs, volunteer organizations, and first responders assess resource needs based on validated claims.
2. Resource pledges are submitted electronically through the app.
3. Madadgar matches pledged resources with validated disaster claims.
4. Users track the status of their pledged resources in real-time.
5. Resource verification teams confirm the delivery of resources on the ground.
6. Madadgar maintains a transparent audit trail and generates allocation reports.

## 📡 API Contracts

#### Completed 
- **POST** - `/api/v1/auth/signup` ✅
  - Register a user with name, email and password
- **POST** - `/api/v1/auth/login` ✅
  - Sign in a user with email and password

### In progress
- **POST** - `/api/v1/reports`
  - Report a disaster with details like type, severity, and location.
- **GET** - `/api/v1/reports`
  - Retrieve disaster reports.
- **GET** - `/api/v1/reports?lan=0.00&lat=0.00`
  - Retrieve reports based on longitude and latitude.
- **GET** - `/api/v1/reports/[:id]`
  - Retrieve a specific disaster report.
- **POST** - `/api/v1/reports/authorize/[:id]`
  - Authorize resources for a disaster report.
- **GET** - `/api/v1/reports/pledges/[:id]`
  - Retrieve pledges for a specific disaster report.
- **POST** - `/api/v1/pledges`
  - Submit resource pledges for disaster reports.
- **GET** - `/api/v1/pledges`
  - Retrieve resource pledges.
- **POST** - `/api/v1/pledges`
  - Submit resource pledges.

## 🤝 Contributing

We welcome contributions from developers, designers, and anyone passionate about disaster response and relief efforts. Check out our [Contribution Guidelines](CONTRIBUTING.md) to get started.

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it to support disaster relief worldwide.

Join us on the journey to revolutionize disaster response. Together, we can make a difference when it matters most. 🌟

---

Made with ❤️ by the Madadgar Team.
