import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, AlertCircle } from 'lucide-react';

const BecomeABuilder = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [skills, setSkills] = useState(''); // Comma-separated
  const [projects, setProjects] = useState(''); // Comma-separated
  const [twitterUrl, setTwitterUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    // Basic validation (can be expanded)
    if (!name || !role || !bio) {
      setError('Name, Role, and Bio are required.');
      setIsLoading(false);
      return;
    }

    const skillsArray = skills.split(',').map(skill => skill.trim()).filter(skill => skill);
    const projectsArray = projects.split(',').map(project => project.trim()).filter(project => project);

    try {
      const { data, error: submissionError } = await supabase
        .from('builders')
        .insert([
          {
            name,
            role,
            bio,
            avatar_url: avatarUrl || null, // Handle empty string
            skills: skillsArray.length > 0 ? skillsArray : null,
            projects: projectsArray.length > 0 ? projectsArray : null,
            twitter_url: twitterUrl || null,
            github_url: githubUrl || null,
            linkedin_url: linkedinUrl || null,
          },
        ])
        .select();

      if (submissionError) {
        throw submissionError;
      }

      setSuccess('Application submitted successfully! You will be added to the directory.');
      // Optionally clear form or redirect
      setName('');
      setRole('');
      setBio('');
      setAvatarUrl('');
      setSkills('');
      setProjects('');
      setTwitterUrl('');
      setGithubUrl('');
      setLinkedinUrl('');
      
      // Navigate back to builders page after a delay
      setTimeout(() => {
        navigate('/builders');
      }, 3000);

    } catch (err: any) {
      console.error('Error submitting builder application:', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
          Become a <span className="text-fbi-blue">Builder</span>
        </h1>
        <p className="text-muted-foreground text-center mb-10">
          Fill out the form below to join our directory of talented builders. We're excited to have you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Full Name" required />
          </div>

          <div>
            <Label htmlFor="role">Role / Title <span className="text-red-500">*</span></Label>
            <Input id="role" value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g., Full Stack Developer, UI/UX Designer" required />
          </div>

          <div>
            <Label htmlFor="bio">Short Bio <span className="text-red-500">*</span></Label>
            <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Tell us a bit about yourself and your passion (max 200 characters)" maxLength={200} required />
          </div>

          <div>
            <Label htmlFor="avatarUrl">Avatar URL</Label>
            <Input id="avatarUrl" value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)} placeholder="Link to your profile picture (e.g., from Twitter, GitHub)" />
          </div>

          <div>
            <Label htmlFor="skills">Skills</Label>
            <Input id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Comma-separated, e.g., React, Solidity, UI Design" />
            <p className="text-sm text-muted-foreground mt-1">Enter skills separated by commas.</p>
          </div>

          <div>
            <Label htmlFor="projects">Projects</Label>
            <Input id="projects" value={projects} onChange={(e) => setProjects(e.target.value)} placeholder="Comma-separated, e.g., DeFi App, NFT Marketplace" />
            <p className="text-sm text-muted-foreground mt-1">Enter project names separated by commas.</p>
          </div>

          <div>
            <Label htmlFor="twitterUrl">Twitter Profile URL</Label>
            <Input id="twitterUrl" type="url" value={twitterUrl} onChange={(e) => setTwitterUrl(e.target.value)} placeholder="https://twitter.com/yourusername" />
          </div>

          <div>
            <Label htmlFor="githubUrl">GitHub Profile URL</Label>
            <Input id="githubUrl" type="url" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} placeholder="https://github.com/yourusername" />
          </div>

          <div>
            <Label htmlFor="linkedinUrl">LinkedIn Profile URL</Label>
            <Input id="linkedinUrl" type="url" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} placeholder="https://linkedin.com/in/yourusername" />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert variant="default" className="bg-green-100 border-green-400 text-green-700 dark:bg-green-900 dark:border-green-700 dark:text-green-300">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BecomeABuilder;
