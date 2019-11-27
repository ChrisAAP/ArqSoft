const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');

const User = require('../../models/User');
const Profile = require('../../models/Profile');

//  @route  GET api/profile/me
//  @desc Get current user profile
//  @access Private

router.get('/me', auth, async(req, res) => {
    try {
        const profile = await Profile.findOne({user: req.user.id}).populate(
            'user',
            ['name', 'avatar']
        );

    if(!profile){
        return res.status(400).json({msg: 'There is no profile for this user'});
    }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//  @route  Post api/profile
//  @desc Create or update user profile
//  @access Private

router.post(
    '/', 
    [
        auth,
        [
            check('school', 'School is required')
                .not()
                .isEmpty(),
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const{
            school
        } = req.body;

        const profileFields = {};
        profileFields.user = req.user.id;
        if(school) profileFields.school = school;

        try {
            // Using upsert option (creates new doc if no match is found):
            let profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true, upsert: true }
            );
             res.json(profile);
            
        } catch (error) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
    try {
      const profiles = await Profile.find().populate('user', ['name', 'avatar']);
      res.json(profiles);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
    try {
      const profile = await Profile.findOne({
        user: req.params.user_id
      }).populate('user', ['name', 'avatar']);
  
      if (!profile) return res.status(400).json({ msg: 'Profile not found' });
  
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      res.status(500).send('Server Error');
    }
});

// @route    PUT api/profile/student
// @desc     Add profile student
// @access   Private
router.put(
    '/student',
    [
      auth,
      [
        check('name', 'Name is required')
          .not()
          .isEmpty(),
        check('class', 'class is required')
          .not()
          .isEmpty()
      ]
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {
        name,
        classes,
        academic,
        team_work,
        comm_skills
      } = req.body;
  
      const newStudent = {
        name,
        classes,
        academic,
        team_work,
        comm_skills
      };
  
      try {
        const profile = await Profile.findOne({ user: req.user.id });
  
        profile.students.unshift(newStudent);
  
        await profile.save();
  
        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

module.exports = router;