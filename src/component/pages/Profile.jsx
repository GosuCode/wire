
const Profile = () => {
    return (
        <>
            <div className="bg-white p-4 w-2/3">
                <h3>User</h3>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id="" /> <br />
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" id="" /> <br />
                <label htmlFor="image">Profile Image</label>
                <img src="" alt="user profile picture" />
                <input type="file" name="image" id="" />
            </div>
            <div>
                <h3>Basic</h3>
                <label htmlFor="websiteURL">Website URL</label>
                <input type="text" name="websiteURL" id="" /> <br />
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="" /> <br />
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" id="" cols="30" rows="10"></textarea> <br />
            </div>
        </>
    )
}

export default Profile
