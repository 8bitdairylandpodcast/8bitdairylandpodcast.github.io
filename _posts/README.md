Adding an eppo
====

8-bit Dairyland and _you_

Step One
--------

Fork the repo, then:

    git clone git@github.com:<username>/8bitdairyland.github.io.git
    cd 8bitdairyland.github.io
    gem install jekyll
    jekyll serve --watch

Step Two
--------

In the \_posts folder, start writing your files! You will be using markdown, so get cozy with this [cheat sheet](http://bit.ly/LTtexM)

Your files must stick to some conventions such as the following:
* The name of your file must have the date, then the name. ie: 2014-02-06-title-of-article.md
* For image thumbnails, we'll use gravatar. Just keep the 'post\_gravitar' md5 hash in the [frontmatter](http://jekyllrb.com/docs/frontmatter/)

    \-\-\-
    post_author: 8-bit Dairyland
    post_gravatar: 4cb34a413e1b253bdc3d743e9f20098b
    comments: true
    tags: [tag-1, tag-2, ..., tag-n]
    \-\-\-

* If you would like to disable comments on the entry, leave that line out.

* For tags to function correctly, you must build the site locally before making your pull request. After adding your post, run

    jekyll build

Step Three
----------

Make a [pull request](http://bit.ly/1eudZYq)!


Feedback
----------
If there is a problem, email alex@thehackerati.com to file a report.
