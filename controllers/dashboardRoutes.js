const router = require("express").Router();
const { Post } = require("../models");
const { loginRequiredRedirect } = require("../helpers/auth");

router.get("/", loginRequiredRedirect, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.user_id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashBoard", {
      dashboard: true,
      posts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", loginRequiredRedirect, (req, res) => {
  res.render("newPost", {
    dashboard: true,
    loggedIn: req.session.logged_in,
  });
});

router.get("/edit/:id", loginRequiredRedirect, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("editPost", {
        dashboard: true,
        post,
        loggedIn: req.session.logged_in,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
