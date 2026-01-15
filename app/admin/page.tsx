"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { PageSection, PageContainer } from "@/components/ui/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { toast } from "sonner";
import {
  FaPlus,
  FaPen,
  FaTrash,
  FaSignOutAlt,
  FaSearch,
  FaExternalLinkAlt,
  FaGithub
} from "react-icons/fa";
import { Project } from "@prisma/client";
import Image from "next/image";

export default function AdminPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Form State
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    gitUrl: "",
    liveUrl: "",
    category: "",
    technologies: "",
    tags: "",
  });

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch {
      toast.error("Erro ao carregar projetos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  const handleOpenCreate = () => {
    setIsEditing(false);
    setCurrentId(null);
    setFormData({
      title: "",
      description: "",
      imageUrl: "",
      gitUrl: "",
      liveUrl: "",
      category: "",
      technologies: "",
      tags: "",
    });
    setIsSheetOpen(true);
  };

  const handleOpenEdit = (project: Project) => {
    setIsEditing(true);
    setCurrentId(project.id);
    setFormData({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      gitUrl: project.gitUrl || "",
      liveUrl: project.liveUrl || "",
      category: project.category,
      technologies: project.technologies.join(", "),
      tags: project.tags.join(", "),
    });
    setIsSheetOpen(true);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 500000) {
        // 500kb limit warning
        toast.warning(
          "Imagem grande! Isso pode deixar o banco lento. Tente comprimir."
        );
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const saveLoadingToast = toast.loading(
      isEditing ? "Atualizando..." : "Criando..."
    );

    try {
      const payload = {
        ...formData,
        technologies: formData.technologies
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        tags: formData.tags
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };

      const url = isEditing ? `/api/projects/${currentId}` : "/api/projects";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Falha ao salvar");

      toast.success(isEditing ? "Projeto atualizado!" : "Projeto criado!", {
        id: saveLoadingToast,
      });
      setIsSheetOpen(false);
      fetchProjects();
    } catch (error) {
      toast.error("Erro ao salvar projeto", { id: saveLoadingToast });
    }
  };

  const handleDelete = async (id: string) => {
    const deleteToast = toast.loading("Deletando...");
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Falha ao deletar");

      toast.success("Projeto deletado", { id: deleteToast });
      fetchProjects();
    } catch {
      toast.error("Erro ao deletar", { id: deleteToast });
    }
  };

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer className="min-h-screen bg-background">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
        <div className="absolute -left-20 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white mask-[linear-gradient(to_bottom,transparent,black,transparent)] opacity-10" />
      </div>

      <PageSection className="relative z-10 p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Gerencie seus projetos e portfólio.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleLogout} className="gap-2">
              <FaSignOutAlt className="w-4 h-4" /> Sair
            </Button>
            <Button
              onClick={handleOpenCreate}
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <FaPlus className="w-4 h-4" /> Novo Projeto
            </Button>
          </div>
        </div>

        {/* Content */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <CardTitle>Projetos ({projects.length})</CardTitle>
                <CardDescription>
                  Lista de todos os projetos cadastrados.
                </CardDescription>
              </div>
              <div className="relative w-full md:w-64">
                <FaSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="pl-9 bg-background/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-10 text-muted-foreground">
                Carregando projetos...
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-10 text-muted-foreground">
                <p>Nenhum projeto encontrado.</p>
                <Button variant="link" onClick={handleOpenCreate}>
                  Criar o primeiro
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Imagem</TableHead>
                    <TableHead className="w-[80px]">Fase</TableHead>
                    <TableHead>Título</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Categoria
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Techs
                    </TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>
                        <div className="relative h-12 w-16 rounded-md overflow-hidden bg-muted">
                          {project.imageUrl ? (
                            <Image
                              src={project.imageUrl}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <span className="text-xs flex items-center justify-center h-full">
                              N/A
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs">
                        <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded-full border border-green-500/20">
                          Active
                        </span>
                      </TableCell>
                      <TableCell className="font-medium">
                        <div>{project.title}</div>
                        <div className="flex gap-2 mt-1 md:hidden">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              className="text-xs text-primary"
                            >
                              <FaExternalLinkAlt className="h-3 w-3" />
                            </a>
                          )}
                          {project.gitUrl && (
                            <a
                              href={project.gitUrl}
                              target="_blank"
                              className="text-xs text-muted-foreground"
                            >
                              <FaGithub className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {project.category}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] bg-secondary px-1.5 py-0.5 rounded-sm"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-[10px] text-muted-foreground">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 hover:text-primary"
                            onClick={() => handleOpenEdit(project)}
                          >
                            <FaPen className="h-4 w-4" />
                          </Button>

                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 hover:text-destructive"
                                onClick={() => handleDelete(project.id)}
                              >
                                <FaTrash className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Tem certeza?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Isso excluirá permanentemente o projeto 
                                  {project.title}. Essa ação não pode ser
                                  desfeita.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(project.id)}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  Excluir
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* Sheet Form for Create/Edit */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                {isEditing ? "Editar Projeto" : "Novo Projeto"}
              </SheetTitle>
              <SheetDescription>
                {isEditing
                  ? "Altere as informações abaixo."
                  : "Preencha as informações do novo projeto."}
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="title">Título do Projeto</Label>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Ex: E-commerce V1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Input
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Fullstack"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Imagem de Capa</Label>
                  <label
                    htmlFor="image-upload"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer hover:bg-muted/50 transition-colors items-center gap-2 text-muted-foreground"
                  >
                    <span className="truncate">
                      {formData.imageUrl
                        ? "Alterar Imagem"
                        : "Selecionar Imagem"}
                    </span>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      required={!isEditing && !formData.imageUrl}
                    />
                  </label>
                </div>
              </div>

              {formData.imageUrl && (
                <div className="relative h-40 w-full rounded-lg overflow-hidden border border-border">
                  <Image
                    src={formData.imageUrl}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Uma breve descrição..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gitUrl">GitHub URL</Label>
                  <div className="relative">
                    <FaGithub className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      name="gitUrl"
                      value={formData.gitUrl}
                      onChange={handleChange}
                      className="pl-9"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="liveUrl">Live URL</Label>
                  <div className="relative">
                    <FaExternalLinkAlt className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      name="liveUrl"
                      value={formData.liveUrl}
                      onChange={handleChange}
                      className="pl-9"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="technologies">Tecnologias</Label>
                <Input
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  required
                  placeholder="React, Node.js, Next.js (separados por vírgula)"
                />
                <p className="text-[10px] text-muted-foreground">
                  Separe por vírgulas.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="Frontend, UI, API (separados por vírgula)"
                />
              </div>

              <SheetFooter className="mt-8 pt-4 border-t">
                <div className="flex w-full justify-between sm:justify-end gap-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit">
                    {isEditing ? "Salvar Alterações" : "Criar Projeto"}
                  </Button>
                </div>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </PageSection>
    </PageContainer>
  );
}
