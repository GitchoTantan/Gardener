import { Router } from 'express';
import { getCommits, getTopRepositories, getChallengeCommit,getCommitsTest } from '../controllers/githubApiHandler';

const router = Router();

router.get('/github/topRepo',  getTopRepositories);
//router.get('/github/Commit',  getCommits);
//router.get('/github/Commit',  getChallengeCommit);
router.get('/github/commit',  getCommitsTest);

export default router;