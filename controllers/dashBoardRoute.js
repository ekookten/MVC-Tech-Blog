const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../helpers/auth");

router.get("/", withAuth, async (req, res) => {
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
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", withAuth, (req, res) => {
  res.render("newPost", {
    dashboard: true,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("editPost", {
        dashboard: true,
        post,
        loggedIn: req.session.loggedIn,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
