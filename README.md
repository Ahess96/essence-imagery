# Essence Imagery

## Introduction

Welcome to Essence Imagery, a MERN stack application styled with Tailwind. This is a mock website for my photography business. Essence Imagery implements token based authentication with front end and backend guards for CRUD functionality. Authenticated users are able to view photo packages we offer and galleries to provide examples of these packages. Users can also book a photoshoot for a specific date, view all of their orders, update the date and altogether delete individual orders. 

## Technologies

Essence Imagery relies on the frontend powerhouse React.JS. It's composed of 3 Pages and various components that rerender when updated. The entire application is fully functional without page refreshes. The routing and middleware is dependent on and simplified by Express. Data from Essence Imagery is handled by MongoDB and simplified with Mongoose. Also, nearly every element is styled using Tailwind. 

![Gallery Scroll](https://media.giphy.com/media/aZNIeFFlMd2ALFZLR0/giphy.gif)

View the deployed site here --> [Essence Imagery](https://essence-imagery.herokuapp.com/)

## Planning

Essence Imagery was planned using a fully developed wireframe, ERD and Trello board. All MVP plans were accomplised. 

| Type | Link |
|-----|-----
| User Statements | [Trello](https://trello.com/b/Oh7JX2H3/project3) |
| Models | [ERD](https://lucid.app/lucidchart/d2d3ba39-a4f7-4208-909e-4d3f2280b97f/edit?beaconFlowId=293E4409970036BA&invitationId=inv_37e29a90-f3a1-41b3-8641-9af0e5b563f2&page=0_0#)|
| UI | [Wireframe](https://www.figma.com/file/4ymiL0bgZZ3sNQazVtWwtX/Project3?node-id=0-1&t=3KznuURnvlEmjiWr-0)|

![Trello](https://i.ibb.co/hK8zLD5/873-C3568-397-A-448-B-BB73-100-B7-A31-D1-A8.jpg)


## Features

As mentioned, Essence Imagery supplies users full CRUD capabilities, but it all begins with the creation of a user via the *sign up*.

![Sign up form](https://i.ibb.co/ZGGwmwz/62-CAE80-E-50-C5-402-F-8245-68-F8-DD36559-D.jpg)

After a user signs up they become authenticated by a JSON web token with a hashed password protected by bcrypt. A logged in user is able to access routes and CRUD functionalities that are otherwise protected by an *ensureLoggedIn* function.

### Create an Order

Creating an order using Essence Imagery is simple. After viewing a simple PackagePage, the user can select the package that interests them and view a conditionally rendered Gallery component. 

```
{!activePack ?
    <div className="columns-2xl">
        <h1 className='text-3xl'>Packages</h1>
        {packages.map((pack, idx) => <Package pack={pack} key={idx} selectPack={selectPack} />)}
    </div>
    :
    <div className="gallery-container">
        <Gallery activePack={activePack} handleAddToOrder={handleAddToOrder} date={date} setDate={setDate} selectPack={selectPack} />
    </div>
}
```

This simple jsx ternary expression shows the power of state in this application. When no package has been clicked, all packge options are displayed. When a user selects a package, a new Gallery component is rendered which gives them the option to select a date for their order.

### Update and Delete

A user is able to update their order date on any package from a dedicated UserPage.

![Update Date](https://i.ibb.co/ZBRffWM/Screenshot-2023-04-20-at-9-06-24-PM.png)

Updates to the date are immediately reflected on the UI and the database. Mongoose has an intuitive method to locate and delete a document by Id: 
```
async function update(req, res) {
    await Order.findByIdAndUpdate(req.body._id, {date: req.body.date}); 
    res.status(200).json('File update.');
}
```
The *findByIdAndDelete* here simply takes the document Id and properties to be updated. This app is developed to change state when the date is changed and therefore immediately rerender. 

A user can also easily delete an order with the click of a button. A similarly simple mongoose method, *findByIdAndDelete*, updates the database seamlessly. 

## Usage

Useage is simple and evident thanks to styling by Tailwind. Hovering over links alerts the user that they are clickable by a change in text color. Minimally styled buttons also change color to add emphasis to the importance of their effect, like deleting an order. 

When rendered, the gallery has a seamlessly scrollable design with interactivity via hovering. The scrollbar has been removed thanks to the *tailwind-scrollbar-hide* package. This is displayed by the first GIF of this README.

### Responsive Design
![Responsive Design](https://media.giphy.com/media/3yWOgwwcTfIipnUc6a/giphy.gif)

Essence Imagery utilizes several responsive design elements, including the one displayed above. Tailwind allows the developer to include a simple classname to implement this level of responsiveness. 