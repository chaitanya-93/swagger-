const express = require('express');
const router = express.Router();

const users = require('../data/users');

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - name
 *              - email
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The unique identifier for a user
 *              name:
 *                  type: string
 *                  description: Name of the user
 *              email:
 *                  type: string
 *                  description: Email of the user
 *          example:
 *              id: 1,
 *              name: John Doe,
 *              email: Jhone1.Doe1@gmail.com
 *  
 * 
 */

/**
 * @swagger 
 * tags:
 *      name: Users
 *      description: User management APIs
 * 
 */

/**
 * @swagger
 * /users:
 *  get:
 *      tags: [Users]
 *      description: Get all users
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: The list of users
 *              content:
 *                 application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/User'
 */

router.get('/', (req, res) => {
    res.status(200).json(users);
  });


/**
 * @swagger
 * /users/{userId}:
 *  get:
 *      tags: [Users]
 *      description: Get a user by id
 *      parameters:
 *            - in: path
 *              name: userId
 *              required: true
 *              type: integer
 *              description: The unique identifier for a user
 *      responses:
 *         200:
 *              description: The user by id
 *              contens:
 *              application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *         404:
 *             description: A user with the specified ID was not found.
 */
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const user = users.find(user => user.id === +userId);
    if(!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  });


router.get('/:userId')
  module.exports = router;
